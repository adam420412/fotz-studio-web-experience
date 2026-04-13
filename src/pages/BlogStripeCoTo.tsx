import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Stripe i jak zintegrować płatności w Next.js?",
    answer: "Stripe: wiodący payment processor dla deweloperów (2010). API-first. 135+ walut. Obsługuje karty, BLIK, przelewy, Apple Pay, Google Pay. PCI DSS Level 1 — Stripe obsługuje compliance. Modele płatności: Checkout (hosted page), Payment Intents (custom form), Subscriptions, Connect (marketplace). Instalacja: npm install stripe @stripe/stripe-js @stripe/react-stripe-js. Klucze: STRIPE_SECRET_KEY (server), NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (client). Stripe Checkout (najprostrze): Server — stripe.checkout.sessions.create({mode: 'payment', line_items: [{price: priceId, quantity: 1}], success_url, cancel_url}). Client — redirect do session.url. Checkout handles: card input, 3DS, Apple Pay. Webhooks — potwierdzenie płatności. Payment Intents (custom UI): Server — stripe.paymentIntents.create({amount: 2000, currency: 'pln', automatic_payment_methods: {enabled: true}}). Zwróć clientSecret. Client — Elements provider, PaymentElement, stripe.confirmPayment. Stripe.js: const stripe = await loadStripe(publishableKey). const {error} = await stripe.confirmPayment({elements, confirmParams: {return_url: successUrl}}). Test cards: 4242 4242 4242 4242 — success. 4000 0025 0000 3155 — 3DS required. Polskie płatności: BLIK (automatycznie przez Checkout). Przelewy24 (P24). iDEAL. SEPA Direct Debit.",
  },
  {
    question: "Stripe Subscriptions — plany, trial periods i Customer Portal?",
    answer: "Subscription model: Customer -> Subscription -> Plan (Price) -> Product. Price: monthly ($9.99/month) lub yearly ($99/year). Interval: month, year, week, day. Trial: trial_period_days: 14. Tworzenie subscription: stripe.customers.create({email, name}). stripe.subscriptions.create({customer: customerId, items: [{price: priceId}], trial_period_days: 14, payment_behavior: 'default_incomplete'}). Proration: przy upgrade/downgrade automatyczna. proration_behavior: 'create_prorations'. Billing portal: stripe.billingPortal.sessions.create({customer: customerId, return_url: dashboardUrl}). Klient zarządza: zmiana planu, anulowanie, update payment method. Subscription webhooks: customer.subscription.updated — zmiana statusu. customer.subscription.deleted — anulowanie. invoice.payment_succeeded — opłata przebiegła. invoice.payment_failed — nieudana płatność. customer.subscription.trial_will_end — 3 dni przed końcem trial. Obsługa failed payment: dunning — Stripe smart retries. Smart Retries automatycznie. Email notification. Grace period. Pausing subscriptions: stripe.subscriptions.update(id, {pause_collection: {behavior: 'mark_uncollectible'}}). Metered billing: usage-based pricing. stripe.subscriptionItems.createUsageRecord(itemId, {quantity: units, action: 'increment'}). Coupon i promo codes: stripe.coupons.create({percent_off: 20, duration: 'once'}). stripe.promotionCodes.create({coupon: couponId, code: 'WELCOME20'}). Free tier + upgrade: separate product bez price. Webhook upgrades po akcji.",
  },
  {
    question: "Stripe Webhooks — bezpieczna obsługa zdarzeń płatności?",
    answer: "Webhooks: Stripe -> Twój serwer przy każdym zdarzeniu. Asynchroniczne. Retry przy niepowodzeniu (5 razy, exponential backoff). Endpoint (Next.js Route Handler): export async function POST(req: Request) {const body = await req.text(). const signature = req.headers.get('stripe-signature'). let event: Stripe.Event. try {event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET)} catch (err) {return new Response('Webhook Error', {status: 400})}. switch (event.type) {case 'checkout.session.completed': handleCheckout(event.data.object). case 'customer.subscription.deleted': handleCancellation(event.data.object)}}. Raw body ważny: nie parsuj JSON przed weryfikacją. bodyParser: false (Express). Stripe CLI dla lokalnego testowania: stripe listen --forward-to localhost:3000/api/webhooks. stripe trigger payment_intent.succeeded. Webhook secret: stripe webhooks endpoint webhook_secret -> STRIPE_WEBHOOK_SECRET. Idempotency: sprawdź czy event już przetworzony. Zapisz event.id do DB. Sprawdź przed przetworzeniem. Retry safe. Zdarzenia do obsłużenia: checkout.session.completed — aktywuj dostęp. payment_intent.payment_failed — notify user. customer.subscription.updated — sync plan. invoice.upcoming — remind o płatności. charge.dispute.created — chargeback alert. Stripe metadata: attach userId, planId do session. Dostępne w webhook event. Reconnect Stripe customer z własnym user: customers.search lub metadata lookup.",
  },
  {
    question: "Stripe Connect — marketplace i płatności dla wielu sprzedawców?",
    answer: "Stripe Connect: płatności dla platform i marketplace. Express (quick onboarding), Standard (separate Stripe accounts), Custom (white-label, pełna kontrola). Modele: Direct charges — klient płaci sprzedawcy (platforma bierze fee). Destination charges — klient płaci platformie, platforma przekazuje do sprzedawcy. Separate charges and transfers — pełna kontrola. Onboarding sprzedawców: stripe.accounts.create({type: 'express', country: 'PL', email: sellerEmail}). accountLinks.create({account: accountId, refresh_url, return_url, type: 'account_onboarding'}). Przekieruj sprzedawcę do url. Webhook: account.updated, account.application.authorized. Opłata platformy: application_fee_amount: 200 (2 PLN). stripe: {account: connectedAccountId} jako transfer_data. PaymentIntent z transfer_data: transfer_data: {destination: connectedAccountId}. Wypłaty (payouts): automatyczne lub manualne. stripe.payouts.create({amount, currency}, {stripeAccount: connectedAccountId}). Lemon Squeezy i Paddle: alternatywy dla SaaS. Merchant of Record (MoR) — obsługują VAT/podatki za Ciebie. Prostsze dla twórców oprogramowania. Lemon Squeezy API + webhooks podobne do Stripe. Polar.sh: open-source. Dla open-source projektów, creators. Tips, subscriptions. Kiedy Stripe Connect: marketplace z wieloma sprzedawcami. Freelance platformy. Creator economy. Usługi połączone.",
  },
  {
    question: "Alternatywy Stripe — Paddle, Lemon Squeezy, Przelewy24 i PayU dla rynku PL?",
    answer: "Paddle (Merchant of Record): zajmuje się VAT w 200+ krajach. Idealny dla SaaS sprzedającego globalnie. Integracja: Paddle.js overlay checkout. paddle_checkout_open(). Webhooks: payment.succeeded, subscription.cancelled. Droższy niż Stripe (5% + $0.50). Lemon Squeezy (MoR): open-source friendly. Subscriptions, one-time. License keys dla software. API + webhooks. Polskie płatności: Przelewy24 (P24): najpoularniejszy polski agregator. Integracja direktna lub przez Stripe (Stripe obsluguje P24). Akceptuje BLIK, przelewy bankowe, karty. Tpay: polski operator. BLIK, karty, przelewy. API REST. SDK PHP/JavaScript. PayU: obecny w PL i innych krajach CE. Checkout Page lub Rest API. Klarna: BNPL (Buy Now Pay Later). Dostępna przez Stripe (stripe.klarna). Podnosisz konwersję dla drogich produktów. Revolut Business: nowy player. Payment links i API. Przydatny dla małych biznesów. Porównanie Stripe vs Paddle vs P24: Stripe — globalny, najlepsza DX, ale VAT musisz samemu. Paddle — MoR, VAT handled, droższy. P24 — PL rynek, BLIK, tańszy fee (~1.6%). Wybór dla polskiego projektu: jeśli globalnie + DX -> Stripe. Jeśli globalnie + VAT-free -> Paddle. Jeśli głównie PL -> P24 lub Tpay. Jeśli SaaS digital products -> Lemon Squeezy. Zwroty: stripe.refunds.create({payment_intent: id, amount: 500}). Częściowe lub pełne.",
  },
];

const paymentSolutions = [
  { rozwiazanie: "Stripe", model: "Payment Processor", vat: "Twoja odpowiedzialność", rynek: "Globalny", fee: "1.4% + 0.25 EUR (EU cards)", kiedy: "Globalne SaaS, marketplace, custom" },
  { rozwiazanie: "Paddle", model: "Merchant of Record", vat: "Paddle obsługuje", rynek: "Globalny", fee: "5% + $0.50", kiedy: "SaaS globalny, zero VAT hassle" },
  { rozwiazanie: "Lemon Squeezy", model: "Merchant of Record", vat: "LS obsługuje", rynek: "Globalny", fee: "5% + $0.50", kiedy: "Creators, software, open-source" },
  { rozwiazanie: "Przelewy24", model: "Payment Aggregator", vat: "Twoja odpowiedzialność", rynek: "Polska", fee: "~1.6%", kiedy: "Rynek PL, BLIK, przelewy" },
  { rozwiazanie: "Tpay", model: "Payment Aggregator", vat: "Twoja odpowiedzialność", rynek: "Polska/CE", fee: "~1.5-2%", kiedy: "PL market, BLIK, banki" },
  { rozwiazanie: "PayU", model: "Payment Aggregator", vat: "Twoja odpowiedzialność", rynek: "Polska + CE", fee: "~1.5-2%", kiedy: "PL i Europa Środkowa" },
];

export default function BlogStripeCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Stripe, Paddle, Przelewy24 | Fotz Studio"
        description="Stripe Checkout, Payment Intents, Subscriptions, Webhooks, Connect, Paddle (MoR), Lemon Squeezy, Przelewy24 — płatności webowe w Next.js i Node.js 2024."
        canonicalUrl="https://fotz.pl/blog/stripe-paddle-przelewy24-platnosci-nextjs-typescript-2024"

        keywords="Stripe, Paddle, Przelewy24 co to jest, Stripe, Paddle, Przelewy24 jak działa, Stripe, Paddle, Przelewy24 tutorial, Stripe, Paddle, Przelewy24 przykład, czym jest Stripe, Paddle, Przelewy24, Stripe, Paddle, Przelewy24 dokumentacja, Stripe, Paddle, Przelewy24 przewodnik"

        canonical="https://fotz.pl/blog/stripe-paddle-przelewy24-platnosci-nextjs-typescript-2024"
      />
      <ArticleSchema
        title="Stripe, Paddle, Przelewy24 — integracja płatności Next.js TypeScript 2024?"
        description="6 rozwiązań płatności (Stripe/Paddle/Lemon Squeezy/P24/Tpay/PayU) — Checkout, Payment Intents, Subscriptions, Webhooks i Stripe Connect dla marketplace."
        url="https://fotz.pl/blog/stripe-paddle-przelewy24-platnosci-nextjs-typescript-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Stripe i Płatności", url: "https://fotz.pl/blog/stripe-paddle-przelewy24-platnosci-nextjs-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Stripe i Płatności", href: "/blog/stripe-paddle-przelewy24-platnosci-nextjs-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Payments / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stripe i Płatności w Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Stripe Checkout, Subscriptions, Webhooks, Stripe Connect,
              Paddle (MoR), Przelewy24 i BLIK dla rynku polskiego.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Hosted page", value: "Checkout" },
                { label: "Recurring", value: "Subscriptions" },
                { label: "Async events", value: "Webhooks" },
                { label: "VAT handled", value: "Paddle" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 rozwiązań płatności — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Stripe, Paddle, Lemon Squeezy, Przelewy24, Tpay i PayU —
              model, VAT, rynek i opłaty transakcyjne.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozwiązanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">VAT</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rynek</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Fee</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {paymentSolutions.map((p, i) => (
                  <tr key={p.rozwiazanie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.rozwiazanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.model}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.vat}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.rynek}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.fee}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
