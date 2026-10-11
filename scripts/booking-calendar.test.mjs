import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);

// Exercise the real component's event handlers with hook state and external I/O
// replaced in memory. These checks never connect to Supabase, email or the CRM.
function harness({ availabilityError = false, insertError = false, notificationError = false, crmError = false, slotTaken = false, props = {} } = {}) {
  const states = [], effects = [], dependencies = [];
  let cursor = 0;
  const calls = { submit: 0, availability: 0, payloads: [] };
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
    '@/lib/booking': { submitConsultation: async payload => {
      calls.submit++; calls.payloads.push(payload);
      if (slotTaken) throw Object.assign(new Error('Ten termin został już zajęty. Wybierz inny termin.'), {code:'SLOT_TAKEN'});
      if (insertError) throw new Error('Wystąpił błąd. Spróbuj ponownie.');
      return {success:true,crm_queued:true,crm_delivered:!crmError,agency_notification_sent:!notificationError,client_confirmation_sent:!notificationError};
    } },
  };
  const source = fs.readFileSync(new URL('../src/components/BookingCalendar.tsx', import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const context = { exports: {}, require: key => mocks[key] ?? require(key), console, Date, Error, AbortSignal };
  vm.runInNewContext(code, context);
  function render() { cursor = 0; return context.exports.BookingCalendar(props); }
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
  return { render, flush, all, find, text, submit, selectSlot, calls, exports: context.exports };
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


// --- Prefill and context note (calculator handoff) ---

test('initial values prefill the form, stay editable and are sent with the booking', async () => {
  const h = harness({ props: { initialValues: { name: 'Anna Prefill', email: 'anna@example.invalid', phone: '600700800', message: 'Chcę omówić wycenę' } } });
  let tree = await h.selectSlot(); await h.flush(); tree = h.render();
  assert.equal(h.find(tree, n => n.props?.id === 'booking-name').props.value, 'Anna Prefill');
  assert.equal(h.find(tree, n => n.props?.id === 'booking-email').props.value, 'anna@example.invalid');
  assert.equal(h.find(tree, n => n.props?.id === 'booking-message').props.value, 'Chcę omówić wycenę');
  h.find(tree, n => n.props?.id === 'booking-name').props.onChange({ target: { value: 'Anna Poprawiona' } }); tree = h.render();
  await h.find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} });
  tree = h.render();
  assert.match(h.text(tree), /Zgłoszenie konsultacji zapisane/);
  assert.equal(h.calls.submit, 1);
  assert.equal(h.calls.payloads[0].name, 'Anna Poprawiona');
  assert.equal(h.calls.payloads[0].email, 'anna@example.invalid');
  assert.equal(h.calls.payloads[0].message, 'Chcę omówić wycenę');
});

test('a later prefill does not overwrite fields the visitor already edited', async () => {
  const props = { initialValues: { name: 'Pierwsza', email: 'a@example.invalid' } };
  const h = harness({ props });
  let tree = await h.selectSlot(); await h.flush(); tree = h.render();
  h.find(tree, n => n.props?.id === 'booking-name').props.onChange({ target: { value: 'Moje imię' } });
  props.initialValues = { name: 'Druga', email: 'b@example.invalid' };
  tree = h.render(); await h.flush(); tree = h.render();
  assert.equal(h.find(tree, n => n.props?.id === 'booking-name').props.value, 'Moje imię');
  assert.equal(h.find(tree, n => n.props?.id === 'booking-email').props.value, 'b@example.invalid');
});

test('nothing is submitted just because the calendar was opened with prefilled values', async () => {
  const h = harness({ props: { initialValues: { name: 'Anna', email: 'anna@example.invalid', phone: '600700800' }, note: 'Wycena z kalkulatora' } });
  const tree = await h.selectSlot(); await h.flush(); h.render();
  assert.match(h.text(tree), /Do zgłoszenia dołączymy podsumowanie z kalkulatora/);
  assert.equal(h.calls.submit, 0);
});

test('the context note is appended to the booking message and shown to the visitor', async () => {
  const note = 'Wycena z kalkulatora (orientacyjna, netto):\n- Landing Page: 2 500 PLN jednorazowo';
  const h = harness({ props: { note } });
  let tree = await h.selectSlot();
  for (const [id, value] of [['booking-name','Test User'],['booking-email','test@example.invalid'],['booking-phone','123456789'],['booking-message','Pytanie o termin']]) {
    h.find(tree, n => n.props?.id === id).props.onChange({ target: { value } }); tree = h.render();
  }
  assert.match(h.text(tree), /Do zgłoszenia dołączymy podsumowanie z kalkulatora/);
  await h.find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(h.calls.payloads[0].message, `Pytanie o termin\n\n${note}`);
  assert.equal(h.calls.payloads[0].service_type, 'konsultacja');
});

test('without a note the message is sent unchanged and no note box is rendered', async () => {
  const h = harness();
  let tree = await h.selectSlot();
  assert.doesNotMatch(h.text(tree), /Do zgłoszenia dołączymy/);
  for (const [id, value] of [['booking-name','Test User'],['booking-email','test@example.invalid'],['booking-phone','123456789'],['booking-message','Tylko moja treść']]) {
    h.find(tree, n => n.props?.id === id).props.onChange({ target: { value } }); tree = h.render();
  }
  await h.find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(h.calls.payloads[0].message, 'Tylko moja treść');
});

test('composeBookingMessage keeps the visitor text whole and trims only the note to the limit', () => {
  const { composeBookingMessage, BOOKING_MESSAGE_LIMIT } = harness().exports;
  assert.equal(BOOKING_MESSAGE_LIMIT, 2000);
  assert.equal(composeBookingMessage('', 'nota'), 'nota');
  assert.equal(composeBookingMessage('tekst', ''), 'tekst');
  assert.equal(composeBookingMessage(undefined, undefined), '');
  const own = 'x'.repeat(1990);
  const composed = composeBookingMessage(own, 'y'.repeat(100));
  assert.equal(composed.length, 2000);
  assert.ok(composed.startsWith(own + '\n\n'));
  assert.equal(composeBookingMessage('x'.repeat(1999), 'nota'), 'x'.repeat(1999));
  assert.equal(composeBookingMessage('a', 'b', 10), 'a\n\nb');
});

test('a message over the limit is rejected before anything is sent', async () => {
  const h = harness({ props: { note: 'nota' } });
  let tree = await h.selectSlot();
  for (const [id, value] of [['booking-name','Test User'],['booking-email','test@example.invalid'],['booking-phone','123456789'],['booking-message','z'.repeat(2001)]]) {
    h.find(tree, n => n.props?.id === id).props.onChange({ target: { value } }); tree = h.render();
  }
  await h.find(tree, n => n.type === 'form').props.onSubmit({ preventDefault() {} });
  tree = h.render();
  assert.match(h.text(tree), /Wiadomość może mieć do 2000 znaków/);
  assert.equal(h.calls.submit, 0);
});
