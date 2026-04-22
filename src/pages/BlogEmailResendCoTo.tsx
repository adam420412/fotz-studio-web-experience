import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Resend i jak wysyłać emaile transakcyjne w Next.js?",
    answer: "Resend: nowoczesny email API dla deweloperów (2023). Zbudowany przez twórcę WorkOS. Developer-first DX. React Email integration. Bezpłatny plan: 3000 emaili/miesiąc, 100/dzień. Instalacja: npm install resend. import {Resend} from 'resend'. const resend = new Resend(process.env.RESEND_API_KEY). Wysyłanie: await resend.emails.send({from: 'hello@fotz.pl', to: 'user@example.com', subject: 'Witaj!', html: '<p>Treść emaila</p>'}). Z React Email: react: EmailTemplate({name: 'Adam'}). Domenowa weryfikacja: DNS TXT, MX, DKIM records. Resend weryfikuje Twoją domenę. Zwiększa deliverability. Route Handler (Next.js): export async function POST(req: Request) {const {to, subject} = await req.json(). const {data, error} = await resend.emails.send({from: 'noreply@fotz.pl', to, subject, react: WelcomeEmail({name: to})}). return Response.json(data || error)}. Resend SDK features: emails.list, emails.get (tracking). Typy wiadomości: transakcyjne (reset hasła, potwierdzenia), marketingowe (newsletters). Resend vs SendGrid vs Nodemailer: Resend — najlepsza DX, React Email, nowy. SendGrid — dojrzały, duże wolumeny, marketing campaigns. Nodemailer — self-managed SMTP, open-source, bez SaaS. Resend Webhooks: email.delivered, email.opened, email.clicked, email.bounced, email.complained. Subskrybuj zdarzenia dla analytics.",
  },
  {
    question: "React Email — szablony emaili z React komponentami?",
    answer: "React Email: biblioteka do budowania emaili jako React komponenty. Compatibility across email clients (Gmail, Outlook, Apple Mail). Preview w przeglądarce. Export do HTML. Instalacja: npm install @react-email/components react-email. Komponenty: Html, Head, Body, Container, Section, Row, Column. Text, Heading, Button, Link, Hr, Img. Preview server: npx react-email dev. Preview na localhost:3000. Hot reload. Przykład template: import {Html, Body, Container, Text, Button, Img} from '@react-email/components'. export function WelcomeEmail({name}: {name: string}) {return Html lang='pl' {Body style={{fontFamily: 'sans-serif'}} {Container {Text Witaj, {name}. Text Dziękujemy za rejestrację. Button href='https://fotz.pl' Zaloguj się. }}}. Integracja z Resend: resend.emails.send({react: WelcomeEmail({name: 'Adam'})}). Resend konwertuje React do HTML automatycznie. react-email + Nodemailer: renderToStaticMarkup(EmailTemplate()). nodemailer.sendMail({html: renderedHtml}). Tailwind w React Email: Tailwind component (experimental). CSS inline dla email clients. Responsive email: sprawdź campaign.monitor, emailonacid do testowania. Przykładowe szablony: resetPassword, orderConfirmation, invoiceEmail, verifyEmail, welcomeEmail, subscriptionRenewal. Dostępne na react.email/examples. Litmus/Email on Acid: testowanie w 50+ klientach. Kosztowne ale ważne. Szybka alternatywa: MJML (XML-based email framework), zcompiluje do HTML.",
  },
  {
    question: "SendGrid, Mailgun i AWS SES — enterprise email services?",
    answer: "SendGrid (Twilio): od 2009. Transakcyjne i marketingowe. Marketing Campaigns. 100 email/dzień free. Instalacja: @sendgrid/mail. sgMail.setApiKey(key). sgMail.send({to, from, subject, text, html}). Dynamic Templates: template w SendGrid UI. sgMail.send({templateId: 'd-xxx', dynamicTemplateData: {name, actionUrl}}). Unsubscribe groups — RODO compliance. Email analytics: opens, clicks, bounces, spam reports. Inbound parse: parse incoming emails na webhook. Mailgun (Sinch): API-first. Zaprojektowany przez deweloperów. EU data residency. Walidacja emaili: mg.validate.get(email). Dobre deliverability. Routes (inbound). AWS SES (Simple Email Service): najtańszy ($0.10 per 1000 emails). Wymaga konfiguracji: DKIM, SPF, DMARC, feedback loop. Trudniejszy setup. Idealny przy dużych wolumenach. nodemailer + SES transport. Postmark: transakcyjne only. Fenomenalne deliverability. Activity dashboard. 25 free / miesiąc w live. Świetne dla saas. Message Streams. SMTP.js: client-side (zły pomysł — eksponuje credentiale). Zawsze server-side. Emaile transakcyjne (lista): welcome email. reset hasła. weryfikacja emaila. potwierdzenie zamówienia. faktura PDF attachment. newsletter. powiadomienie o aktywności. upomnienie o płatności. alert bezpieczeństwa (nowe logowanie). Deliverability best practices: własna domena (nie gmail.com). SPF, DKIM, DMARC skonfigurowane. List hygiene (czysty bounce). Double opt-in. Unsubscribe link obligatoryjny.",
  },
  {
    question: "Nodemailer i własny SMTP — kiedy nie potrzebujesz SaaS?",
    answer: "Nodemailer: Node.js SMTP library (2010). Zero external dependency. Używany w 92% Node projektów. Konfiguracja SMTP: const transporter = nodemailer.createTransport({host: 'smtp.example.com', port: 587, secure: false, auth: {user: 'user@example.com', pass: process.env.EMAIL_PASS}}). Wysyłanie: await transporter.sendMail({from: '\"Fotz\" info@fotz.pl', to: 'user@example.com', subject: 'Temat', html: emailHtml, attachments: [{filename: 'invoice.pdf', content: pdfBuffer}]}). Gmail SMTP (dev only): {service: 'gmail', auth: {user: GMAIL, pass: APP_PASSWORD}}. App Password z Google Account Security. NIE używaj w produkcji (rate limits, trust issues). Ethereal Email (test): const account = await nodemailer.createTestAccount(). Preview URL zamiast wysyłania. nodemailer.getTestMessageUrl(info). MailHog (local dev): Docker container. Łapie wszystkie emaile lokalnie. docker run -p 1025:1025 -p 8025:8025 mailhog/mailhog. SMTP port 1025, UI port 8025. Self-hosted email server: Postal, Maddy, SimpleLogin. Własna infrastruktura. Problemy: reputation, spam filtering, SPF/DKIM/DMARC. Dla startupów — nie polecane. Kiedy Nodemailer: własny SMTP serwer. Google Workspace. Office365. Masz już email infrastructure. Kiedy Resend/SendGrid: brak własnej infrastruktury. Potrzebujesz analytics. Scale. PDF attachments: nodemailer + pdfkit lub pdf-lib. Generate buffer -> attach. Resend: data: pdfBuffer -> convertToBase64. {filename: 'faktura.pdf', content: base64String}.",
  },
  {
    question: "Emaile w Next.js — Server Actions, queuing i rate limiting?",
    answer: "Server Actions + email: 'use server'. async function sendWelcomeEmail(formData: FormData). Nie blokuj UI — email może być wolny. Background job pattern: Nie wysyłaj emaila w Server Action bezpośrednio. Wstaw do kolejki (Redis/Inngest/Trigger.dev). Worker przetworzy asynchronicznie. Inngest: job queuing dla Next.js. inngest.createFunction({id: 'send-welcome-email'}, {event: 'user/signup'}, async ({event}) => {await resend.emails.send({...})}). Trigger.dev: background jobs, scheduled tasks. createTask('send-email', {run: async (payload) => {...}}). BullMQ (Redis-based): const emailQueue = new Queue('emails', {connection}). emailQueue.add('welcome', {to, name}). Worker: emailQueue.process(async (job) => {await resend.emails.send({...})}). Rate limiting emaili: upstash/ratelimit. Limity per user: 1 reset email per 5 minut. Limity globalne: max 100 emaili/minutę. Cooldown okresy. Email verification flow: Generuj unique token (crypto.randomUUID()). Zapisz token do DB z expiry (15 min). Wyslij email z linkiem /verify?token=xxx. Po kliknięciu: sprawdź token, oznacz email jako verified, usuń token. Resend token po upływie. Monitoring: Resend webhook -> bounce tracking. Usuń lub oznacz bounced adresy. SendGrid suppression list. Nie wysyłaj do bounced/unsubscribed. RODO/GDPR: przechowuj zgody marketingowe. Unsubscribe link w każdym emailu marketingowym. Loguj datę zgody. Dane osobowe w emailach — minimalizacja.",
  },
];

const emailServices = [
  { serwis: "Resend", plan_free: "3000/mies, 100/dzień", dlx: "Najlepsza (React Email)", react_email: "Tak (natywny)", kiedy: "Next.js, małe-średnie projekty, DX" },
  { serwis: "SendGrid", plan_free: "100/dzień", dlx: "Dobra", react_email: "Dynamic Templates", kiedy: "Duże wolumeny, marketing campaigns" },
  { serwis: "Mailgun", plan_free: "100/dzień (trial)", dlx: "Dobra (API-first)", react_email: "Ręcznie HTML", kiedy: "EU data, walidacja emaili, API" },
  { serwis: "Postmark", plan_free: "100/mies", dlx: "Dobra", react_email: "Ręcznie HTML", kiedy: "Deliverability critical, SaaS" },
  { serwis: "AWS SES", plan_free: "62K/mies (z EC2)", dlx: "Podstawowa", react_email: "Ręcznie HTML", kiedy: "Duże wolumeny, niski koszt, AWS" },
  { serwis: "Nodemailer + SMTP", plan_free: "Zależy od SMTP", dlx: "Minimalna", react_email: "renderToStaticMarkup", kiedy: "Własny SMTP, open-source, dev" },
];

export default function BlogEmailResendCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Resend, SendGrid, Nodemailer | Fotz Studio"
        description="Resend + React Email, SendGrid, Mailgun, Postmark, AWS SES, Nodemailer — wysyłanie emaili transakcyjnych w Next.js, Server Actions, BullMQ queue i…"
        canonical="https://fotz.pl/blog/resend-sendgrid-nodemailer-emaile-transakcyjne-nextjs-2024"

        keywords="Resend, SendGrid, Nodemailer co to jest, Resend, SendGrid, Nodemailer jak działa, Resend, SendGrid, Nodemailer tutorial, Resend, SendGrid, Nodemailer przykład, czym jest Resend, SendGrid, Nodemailer, Resend, SendGrid, Nodemailer dokumentacja, Resend, SendGrid, Nodemailer przewodnik"
      />
      <ArticleSchema
        title="Resend, SendGrid, Nodemailer — emaile transakcyjne w Next.js TypeScript?"
        description="6 serwisów email (Resend/SendGrid/Mailgun/Postmark/AWS SES/Nodemailer) — React Email, Server Actions, kolejkowanie BullMQ, rate limiting i RODO compliance."
        url="https://fotz.pl/blog/resend-sendgrid-nodemailer-emaile-transakcyjne-nextjs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Email i Resend", url: "https://fotz.pl/blog/resend-sendgrid-nodemailer-emaile-transakcyjne-nextjs-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Email i Resend", url: "/blog/resend-sendgrid-nodemailer-emaile-transakcyjne-nextjs-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Email / Next.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emaile Transakcyjne w Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Resend + React Email, SendGrid, Nodemailer, kolejkowanie BullMQ
              i deliverability best practices w Next.js i Node.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "DX email API", value: "Resend" },
                { label: "React templates", value: "React Email" },
                { label: "Job queuing", value: "Inngest" },
                { label: "Deliverability", value: "SPF+DKIM" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Serwisy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 serwisów email — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Resend, SendGrid, Mailgun, Postmark, AWS SES i Nodemailer —
              plan darmowy, DX, React Email integracja i najlepszy use case.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Serwis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Plan darmowy</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">DX</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">React Email</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {emailServices.map((s, i) => (
                  <tr key={s.serwis} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{s.serwis}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.plan_free}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.dlx}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{s.react_email}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{s.kiedy}</td>
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

      <RelatedArticles currentArticleId="resend-sendgrid-nodemailer-emaile-transakcyjne-nextjs-2024" />
      <ContactSection />
    </Layout>
  );
}
