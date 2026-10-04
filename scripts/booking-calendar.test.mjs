import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);

// Exercise the real component's event handlers with hook state and external I/O
// replaced in memory. These checks never connect to Supabase, email or the CRM.
function harness({ availabilityError = false, insertError = false, notificationError = false, crmError = false } = {}) {
  const states = [], effects = [], dependencies = [];
  let cursor = 0;
  const calls = { insert: 0, notify: 0, crm: 0 };
  const react = { ...require('react'),
    useState(initial) {
      const i = cursor++;
      if (!(i in states)) states[i] = typeof initial === 'function' ? initial() : initial;
      return [states[i], value => { states[i] = typeof value === 'function' ? value(states[i]) : value; }];
    },
    useRef(value) { const i = cursor++; return states[i] ??= { current: value }; },
    useCallback(fn, deps) {
      const i = cursor++;
      if (!dependencies[i] || deps.some((v, j) => v !== dependencies[i][j])) states[i] = fn;
      dependencies[i] = deps;
      return states[i];
    },
    useEffect(fn, deps) {
      const i = cursor++;
      if (!dependencies[i] || deps.some((v, j) => v !== dependencies[i][j])) effects.push(fn);
      dependencies[i] = deps;
    },
  };
  const query = {
    select() { return this; }, gte() { return this; }, lte() { return this; },
    in() { return Promise.resolve({ data: availabilityError ? null : [], error: availabilityError ? new Error('offline') : null }); },
    insert() { calls.insert++; return Promise.resolve({ error: insertError ? new Error('save failed') : null }); },
  };
  const mocks = {
    react,
    'react-router-dom': { useNavigate: () => () => {} },
    '@/components/ui/button': { Button: 'button' },
    '@/components/ui/input': { Input: 'input' },
    '@/components/ui/textarea': { Textarea: 'textarea' },
    '@/lib/utils': { cn: (...a) => a.filter(Boolean).join(' ') },
    '@/integrations/supabase/client': { supabase: { from: () => query, functions: { invoke: async () => { calls.notify++; return { error: notificationError ? new Error("notify failed") : null }; } } } },
    '@/hooks/useCRMWebhook': { sendBookingToCRM: async () => { calls.crm++; return {success: !crmError}; } },
  };
  const source = fs.readFileSync(new URL('../src/components/BookingCalendar.tsx', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const context = { exports: {}, require: key => mocks[key] ?? require(key), console, Date, AbortSignal };
  vm.runInNewContext(code, context);
  function render() { cursor = 0; return context.exports.BookingCalendar({}); }
  function all(tree, predicate, result = []) {
    if (!tree || typeof tree !== 'object') return result;
    if (predicate(tree)) result.push(tree);
    const children = tree.props?.children;
    (Array.isArray(children) ? children.flat(Infinity) : [children]).forEach(child => all(child, predicate, result));
    return result;
  }
  function text(tree) {
    if (tree == null || typeof tree === 'boolean') return '';
    if (typeof tree !== 'object') return String(tree);
    return [tree.props?.children].flat(Infinity).map(text).join(' ').trim();
  }
  async function flush() { const work = effects.splice(0); work.forEach(fn => fn()); await new Promise(resolve => setImmediate(resolve)); }
  const find = (tree, predicate) => { const item = all(tree, predicate)[0]; assert.ok(item, 'expected UI control'); return item; };
  async function selectSlot() {
    let tree = render(); await flush(); tree = render();
    find(tree, n => n.props?.['aria-label'] === 'Następny tydzień').props.onClick();
    tree = render(); await flush(); tree = render();
    find(tree, n => n.type === 'button' && 'aria-pressed' in n.props && !n.props.disabled).props.onClick();
    tree = render();
    find(tree, n => n.type === 'button' && text(n) === '09:00').props.onClick();
    tree = render();
    find(tree, n => n.type === 'button' && text(n).includes('Dalej')).props.onClick();
    return render();
  }
  async function submit() {
    let tree = await selectSlot();
    for (const [id, value] of [['booking-name','Test User'],['booking-email','test@example.invalid'],['booking-phone','123456789']]) {
      find(tree, n => n.props?.id === id).props.onChange({ target: { value } }); tree = render();
    }
    await find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} });
    return render();
  }
  return { render, flush, all, find, text, submit, calls };
}

test('failed booking save stays on the form and sends no notification or CRM event', async () => {
  const h = harness({ insertError: true });
  const tree = await h.submit();
  assert.match(h.text(tree), /Wystąpił błąd/);
  assert.doesNotMatch(h.text(tree), /Zgłoszenie konsultacji zapisane/);
  assert.deepEqual(h.calls, { insert: 1, notify: 0, crm: 0 });
});

test('successful pending save is described as a request, without asserting email delivery', async () => {
  const h = harness();
  const tree = await h.submit();
  assert.match(h.text(tree), /Zgłoszenie konsultacji zapisane/);
  assert.match(h.text(tree), /Termin wymaga potwierdzenia/);
  assert.doesNotMatch(h.text(tree), /Wysłaliśmy potwierdzenie/);
  assert.deepEqual(h.calls, { insert: 1, notify: 1, crm: 1 });
});

test('unavailable slot service shows retry and disables continuation', async () => {
  const h = harness({ availabilityError: true });
  h.render(); await h.flush();
  const tree = h.render();
  assert.match(h.text(tree), /Nie udało się sprawdzić dostępnych terminów/);
  assert.equal(h.find(tree, n => n.type === 'button' && h.text(n).includes('Dalej')).props.disabled, true);
  assert.equal(h.calls.insert, 0);
});

test('changing week clears the previously selected day', async () => {
  const h = harness();
  let tree = h.render(); await h.flush(); tree = h.render();
  h.find(tree, n => n.props?.['aria-label'] === 'Następny tydzień').props.onClick();
  tree = h.render(); await h.flush(); tree = h.render();
  h.find(tree, n => n.type === 'button' && 'aria-pressed' in n.props && !n.props.disabled).props.onClick();
  tree = h.render();
  assert.ok(h.all(tree, n => n.props?.['aria-pressed'] === true).length);
  h.find(tree, n => n.props?.['aria-label'] === 'Następny tydzień').props.onClick();
  tree = h.render();
  assert.equal(h.all(tree, n => n.props?.['aria-pressed'] === true).length, 0);
  assert.doesNotMatch(h.text(tree), /Wybierz godzinę/);
});


test('saved booking survives notification and CRM failure without inviting a duplicate retry', async () => {
 const h=harness({notificationError:true,crmError:true});
 const tree=await h.submit();
 assert.match(h.text(tree), /Zgłoszenie konsultacji zapisane/);
 assert.match(h.text(tree), /Nie wysyłaj go ponownie/);
 assert.doesNotMatch(h.text(tree), /Wystąpił błąd. Spróbuj ponownie/);
 assert.deepEqual(h.calls,{insert:1,notify:1,crm:1});
});
