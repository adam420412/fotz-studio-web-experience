import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "React Email — tworzenie szablonów email w JSX?",
    answer: "React Email: Resend Team. Email templates jako React komponenty. Renderuje do HTML + Text. Kompatybilny z wszystkimi klientami email. Instalacja: npm install react-email @react-email/components. Podstawowy template: import {Html, Body, Container, Text, Button, Heading, Hr, Img} from '@react-email/components'. import * as React from 'react'. export default function WelcomeEmail({name}: {name: string}) { return Html. Body. Container. Heading Witaj, {name}! /Heading. Text Dziękujemy za rejestrację /Text. Button href='https://myapp.com' Zacznij /Button. /Container. /Body. /Html. }. Renderowanie: import {render} from '@react-email/render'. const html = await render(WelcomeEmail({name: 'Jan'})). const text = await render(WelcomeEmail({name: 'Jan'}), {plainText: true}). Preview: npx email dev — localhost:3000. Hot reload. Podgląd w różnych klientach. Komponenty: Html, Head, Body. Container — centrowanie. Section, Row, Column — layout. Text, Heading, Hr. Button, Link. Img — optymalizowany. Preview — pre-header tekst. Font — Google Fonts. Tailwind CSS: import {Tailwind} from '@react-email/tailwind'. Tailwind config={tailwindConfig}. Klasy Tailwind w emailu. Nie wszystkie — email constraints. Stylowanie: inline styles. style={{color: '#000', fontSize: '16px'}}. CSS inline jest wymagany dla email clients. Media queries ograniczone.",
  },
  {
    question: "Resend — wysyłanie emaili w Next.js i Node.js?",
    answer: "Resend: Guillermo Rauch team. Email API. Developer-first. React Email wbudowane. Darmowy plan: 3000 emaili/miesiąc. Instalacja: npm install resend. Next.js API Route: import {Resend} from 'resend'. import {WelcomeEmail} from '@/emails/welcome'. const resend = new Resend(process.env.RESEND_API_KEY). export async function POST(req: Request) { const {name, email} = await req.json(). const {data, error} = await resend.emails.send({from: 'noreply@myapp.com', to: email, subject: 'Witamy!', react: WelcomeEmail({name})}). if (error) return Response.json({error}, {status: 500}). return Response.json({data}) }. Node.js: const resend = new Resend('re_...'). await resend.emails.send({from: 'Team MyApp noreply@myapp.com', to: 'user@example.com', subject: 'Hello', html: html, text: text}). Attachments: attachments: [{filename: 'invoice.pdf', content: pdfBuffer}]. Tags: tags: [{name: 'category', value: 'welcome'}]. Batch sending: resend.batch.send([emailObj1, emailObj2]). Webhooks: resend.webhooks.create({endpointUrl, events: ['email.delivered', 'email.bounced']}). Domain setup: DNS records. SPF, DKIM automatycznie przez Resend. Domain verification w dashboard. Nodemailer alternatywa: npm install nodemailer. const transporter = nodemailer.createTransport({host: 'smtp.resend.com', port: 465, auth: {user: 'resend', pass: API_KEY}}). Nodemailer + React Email: render() -> html string -> nodemailer.send.",
  },
  {
    question: "Inne biblioteki email — Nodemailer, MJML, SendGrid i Mailgun?",
    answer: "Nodemailer (klasyczny): npm install nodemailer. Wiele transportów: SMTP, SES, Gmail. const transporter = nodemailer.createTransport({service: 'gmail', auth: {user, pass}}). SMTP sendmail. OAuth2 dla Gmail. Nodemailer + React Email = stack produkcyjny. MJML: język do emaili responsywnych. Transpiluje do HTML email-safe. mj-section, mj-column, mj-text. mjml template.mjml -o output.html. MJML + React: mjml-react. Mniej popularny niż React Email. Mailgun: API jak Resend. mg.messages.create(domain, {from, to, subject, html}). Webhooks, tracking. Droższy. Dobre dokumentacja. SendGrid (Twilio): popularny enterprise. @sendgrid/mail. sgMail.setApiKey(). sgMail.send({to, from, subject, text, html}). Dynamic templates (Handlebars). Transactional + marketing. Postmark: developer-friendly. Świetna deliverability. Templates w UI lub API. Tagi + statystyki. Amazon SES: tani. AWS integracja. Nodemailer SES transport. DKIM i bounce obsługa. Porównanie dostarczalności: Resend, Postmark — najlepsza. SendGrid, Mailgun — dobra. Gmail SMTP — słaba (produkcja). Własny serwer SMTP — ryzykowna. Email testing: Mailtrap — sandbox. Ethereal Email — darmowy SMTP. Inbucket — self-hosted. React Email Preview — lokalne szablony. Webhooks i tracking: open/click tracking. Bounce handling. Unsubscribe list. ISP reputation. Blacklist monitoring.",
  },
  {
    question: "Email dostarczalność — SPF, DKIM, DMARC i best practices?",
    answer: "SPF (Sender Policy Framework): DNS TXT record. Kto może wysyłać z domeny. v=spf1 include:amazonses.com include:sendgrid.net -all. '-all' = odrzuć innych. '~all' = soft fail. DKIM (DomainKeys Identified Mail): kryptograficzna sygnatura. Publiczny klucz w DNS. Prywatny klucz na serwerze. Resend/SendGrid generują automatycznie. Weryfikuj domeny w panelu. DMARC: policyfor handling failures. DNS TXT record. _dmarc.yourdomain.com. v=DMARC1; p=quarantine; rua=mailto:reports@yourdomain.com. p=none (monitor), quarantine, reject. Raporty na email. Google postmaster tools. Warmup IP: nowy adres IP — stopniowo zwiększaj. Dzień 1: 100 emaili. Dzień 7: 1000. Dzień 30: 10000+. Nie wysyłaj bulk od razu. Content best practices: nie używaj spam words (FREE, WINNER). Ratio tekst/obrazy przynajmniej 60/40. Plain text version zawsze. Unsubscribe link wymagany (CAN-SPAM, GDPR). Bounce handling: hard bounce -> usuń email. Soft bounce -> kilka prób. ISP blokuje przy >2% hard bounce. Complaint rate: poniżej 0.1%. Unsubscribe list: Honor requests w 10 dni (CAN-SPAM). Natychmiast (GDPR). List-Unsubscribe header. One-click unsubscribe (Gmail/Yahoo 2024). Monitoring: Google Postmaster Tools. Microsoft SNDS. Blacklist check: MXToolbox. Mail-Tester.com.",
  },
  {
    question: "React Email zaawansowane — dark mode, responsywność i testy?",
    answer: "Dark mode w emailu: @media (prefers-color-scheme: dark) — Obsługuje: Apple Mail, Outlook 2019+, Gmail Android. Nie obsługuje: Gmail web, Outlook web. Implementacja: style={{backgroundColor: '#ffffff', colorScheme: 'light dark'}}. Lub: TargetingMediaQuery dla dark. Responsywność email: Container z maxWidth. Section z width 100%. Media queries ograniczone. Tabela dla layout email-safe. React Email responsywny: Column width auto. Preview mode. Testy email renderowania: Litmus — 100 klientów email. Email on Acid — testy. Koszt wysoki. Darmowe: Mailtrap Email Testing. PutsMail. Email Address Testing. Email accessibility: lang attribute. role='presentation' dla layout tables. alt tekst dla obrazów. Kontrast kolorów. Rozmiar tekstu min 14px. Klikalne obszary min 44px. Nie polegaj na obrazach. Zmienne i kondycjonowanie: const isNew = user.createdAt === today. {isNew ? WelcomeSection / : RegularSection / }. Dynamiczne komponenty. Tłumaczenia: i18n w emailach. Osobne szablony per język. Lub dynamiczne propsy. Loop przez produkty: {items.map(item => Row key={item.id}. Column. Text {item.name} /Text. /Column /Row)}. Email + React Server Components: Nie. React Email to oddzielny renderer. Nie Next.js RSC. Ale można wywołać z Server Actions. Email queue: BullMQ + Resend. Rate limiting. Retry logic. Dead letter queue. Scheduled emails.",
  },
];

const emailTools = [
  { narzedzie: "React Email", typ: "Template Engine", opis: "JSX komponenty -> HTML email, preview, Tailwind" },
  { narzedzie: "Resend", typ: "Email API", opis: "Developer-first, darmowy tier 3k/mies, React Email" },
  { narzedzie: "Nodemailer", typ: "SMTP Client", opis: "Klasyczny, wiele transportów, elastyczny" },
  { narzedzie: "Postmark", typ: "Email API", opis: "Najlepsza dostarczalność transakcyjna" },
  { narzedzie: "SendGrid", typ: "Email Platform", opis: "Enterprise, marketing + transakcyjny, API" },
  { narzedzie: "Amazon SES", typ: "Email API", opis: "Najtańszy, AWS ekosystem, wysoka skala" },
];

export default function BlogReactEmailResendCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Email, Resend, Nodemailer | Fotz Studio"
        description="Email w TypeScript 2024: React Email (JSX templates), Resend (email API), Nodemailer (SMTP), SPF/DKIM/DMARC (dostarczalność), dark mode email i testy…"
        canonicalUrl="https://fotz.pl/blog/react-email-resend-nodemailer-szablony-email-jsx-typescript-2024"

        keywords="React Email, Resend, Nodemailer co to jest, React Email, Resend, Nodemailer jak działa, React Email, Resend, Nodemailer tutorial, React Email, Resend, Nodemailer przykład, czym jest React Email, Resend, Nodemailer, React Email, Resend, Nodemailer dokumentacja, React Email, Resend, Nodemailer przewodnik"

        canonical="https://fotz.pl/blog/react-email-resend-nodemailer-szablony-email-jsx-typescript-2024"
      />
      <ArticleSchema
        title="React Email, Resend, Nodemailer — szablony email w JSX TypeScript 2024?"
        description="6 bibliotek do emaili w TypeScript (React Email/Resend/Nodemailer/Postmark/SendGrid/SES) — szablony JSX, API, dostarczalność SPF/DKIM/DMARC i testy emaili."
        url="https://fotz.pl/blog/react-email-resend-nodemailer-szablony-email-jsx-typescript-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Email i Resend 2024", url: "https://fotz.pl/blog/react-email-resend-nodemailer-szablony-email-jsx-typescript-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Email i Resend 2024", url: "/blog/react-email-resend-nodemailer-szablony-email-jsx-typescript-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Email / React / TypeScript / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Email i Resend 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Szablony email w JSX (React Email), Resend API,
              Nodemailer, SPF/DKIM/DMARC i best practices dostarczalności.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Szablony", value: "React Email" },
                { label: "API", value: "Resend" },
                { label: "SMTP", value: "Nodemailer" },
                { label: "Enterprise", value: "SendGrid" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi do emaili w TypeScript — typ i opis</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              React Email, Resend, Nodemailer, Postmark, SendGrid i SES —
              typ, opis i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {emailTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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

      <RelatedArticles currentArticleId="react-email-resend-nodemailer-szablony-email-jsx-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
