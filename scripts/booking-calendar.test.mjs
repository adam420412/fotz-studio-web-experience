import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);

// Exercise the real component's event handlers with hook state and external I/O
// replaced in memory. These checks never connect to Supabase, email or the CRM.
function harness({ availabilityError = false, insertError = false, notificationError = false, crmError = false, slotTaken = false } = {}) {
  const states = [], effects = [], dependencies = [];
  let cursor = 0;
  const calls = { submit: 0, availability: 0 };
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
  const mocks = {
    react,
    'react-router-dom': { useNavigate: () => () => {} },
    '@/components/ui/button': { Button: 'button' },
    '@/components/ui/input': { Input: 'input' },
    '@/components/ui/textarea': { Textarea: 'textarea' },
    '@/lib/utils': { cn: (...a) => a.filter(Boolean).join(' ') },
    '@/integrations/supabase/client': { supabase: { functions: { invoke: async name => {
      assert.equal(name, 'booking-availability'); calls.availability++;
      return { data: availabilityError ? null : {success:true,slots:[]}, error: availabilityError ? new Error('offline') : null };
    } } } },
    '@/lib/booking': { submitConsultation: async () => {
      calls.submit++;
      if (slotTaken) throw Object.assign(new Error('Ten termin został już zajęty. Wybierz inny termin.'), {code:'SLOT_TAKEN'});
      if (insertError) throw new Error('Wystąpił błąd. Spróbuj ponownie.');
      return {success:true,crm_queued:true,crm_delivered:!crmError,agency_notification_sent:!notificationError,client_confirmation_sent:!notificationError};
    } },
  };
  const source = fs.readFileSync(new URL('../src/components/BookingCalendar.tsx', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const context = { exports: {}, require: key => mocks[key] ?? require(key), console, Date, Error, AbortSignal };
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
  assert.equal(h.calls.submit, 1);
});

test('successful pending save is described as a request, without asserting email delivery', async () => {
  const h = harness();
  const tree = await h.submit();
  assert.match(h.text(tree), /Zgłoszenie konsultacji zapisane/);
  assert.match(h.text(tree), /Termin wymaga potwierdzenia/);
  assert.doesNotMatch(h.text(tree), /Wysłaliśmy potwierdzenie/);
  assert.equal(h.calls.submit, 1);
});

test('unavailable slot service shows retry and disables continuation', async () => {
  const h = harness({ availabilityError: true });
  h.render(); await h.flush();
  const tree = h.render();
  assert.match(h.text(tree), /Nie udało się sprawdzić dostępnych terminów/);
  assert.equal(h.find(tree, n => n.type === 'button' && h.text(n).includes('Dalej')).props.disabled, true);
  assert.equal(h.calls.submit, 0);
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
 assert.equal(h.calls.submit,1);
});


test('a slot taken on the server returns to date selection with an explanation', async () => {
 const h=harness({slotTaken:true});
 const tree=await h.submit();
 assert.match(h.text(tree), /Ten termin został już zajęty/);
 assert.doesNotMatch(h.text(tree), /Zgłoszenie konsultacji zapisane/);
 assert.equal(h.find(tree,n=>n.type==='button' && h.text(n).includes('Dalej')).props.disabled,true);
});
