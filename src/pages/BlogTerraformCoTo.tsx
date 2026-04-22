import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Terraform?",
    answer:
      "Terraform to open-source'owe narzędzie Infrastructure as Code (IaC) firmy HashiCorp, wydane w 2014 roku. Terraform pozwala definiować, planować i tworzyć infrastrukturę chmurową (AWS, Azure, GCP, Kubernetes i setki innych) w deklaratywnym języku HCL (HashiCorp Configuration Language). Zamiast ręcznie klikać w konsoli — opisujesz pożądany stan infrastruktury w plikach .tf, a Terraform sam tworzy/modyfikuje/usuwa zasoby.",
  },
  {
    question: "Czym jest IaC (Infrastructure as Code)?",
    answer:
      "Infrastructure as Code (IaC) to podejście do zarządzania infrastrukturą IT jak kodem: przechowywanie w systemie kontroli wersji (Git), code review, testowanie, automatyzacja. IaC eliminuje ręczne konfigurowanie serwerów ('snowflake servers'), zapewnia powtarzalność (identyczne środowiska dev/staging/prod), audytowalność (historia zmian w Git) i możliwość szybkiego odtworzenia infrastruktury. Główne narzędzia IaC: Terraform, Pulumi, AWS CloudFormation, Ansible.",
  },
  {
    question: "Jak działa terraform plan i terraform apply?",
    answer:
      "Terraform działa w trzech krokach: terraform init — pobiera wymagane providery (AWS, Azure, Google), terraform plan — pokazuje co zostanie zmienione (created/modified/destroyed) bez faktycznego wykonania — 'dry run', terraform apply — faktycznie tworzy/modyfikuje/usuwa zasoby zgodnie z planem i aktualizuje state file. State file (terraform.tfstate) przechowuje aktualny stan infrastruktury. Dla pracy zespołowej state przechowuje się zdalnie (S3 + DynamoDB, Terraform Cloud).",
  },
  {
    question: "Co to są Terraform Modules?",
    answer:
      "Terraform Modules to wielokrotnego użytku paczki konfiguracji Terraform — jak funkcje w programowaniu. Moduł enkapsuluje zestaw zasobów z wejściami (variables) i wyjściami (outputs). Przykład: moduł 'vpc' przyjmuje parametry (cidr_block, region) i tworzy cały VPC z subnetami, routing tables, NAT Gateway. Terraform Registry (registry.terraform.io) oferuje setki gotowych modułów dla AWS, Azure, GCP. Moduły zapewniają DRY (Don't Repeat Yourself) i standaryzację infrastruktury.",
  },
  {
    question: "Terraform vs Ansible — różnice?",
    answer:
      "Terraform i Ansible służą różnym celom. Terraform to narzędzie do provisioningu infrastruktury — tworzy i zarządza zasobami cloud (EC2, VPC, RDS). Jest deklaratywne: opisujesz CO chcesz, Terraform wie JAK to zrobić. Ansible to narzędzie do configuration management i deployment — konfiguruje istniejące serwery (instalacja pakietów, konfiguracja nginx, deploy aplikacji). Działa na istniejących hostach przez SSH. W praktyce często używane razem: Terraform tworzy infrastrukturę, Ansible ją konfiguruje.",
  },
];

const terraformConcepts = [
  {
    pojęcie: "Provider",
    opis: "Plugin łączący Terraform z zewnętrznym API (AWS, Azure, GCP, GitHub, Kubernetes, Cloudflare, itp.). Każdy provider dodaje zasoby i data sources.",
    przykład: `provider "aws" {
  region = "eu-west-1"
}`,
  },
  {
    pojęcie: "Resource",
    opis: "Podstawowy budulec infrastruktury — instancja EC2, bucket S3, baza RDS. Każdy resource ma typ (aws_instance) i konfigurację.",
    przykład: `resource "aws_s3_bucket" "my_bucket" {
  bucket = "my-company-assets"
  tags   = { Environment = "production" }
}`,
  },
  {
    pojęcie: "Variable",
    opis: "Zmienne wejściowe parametryzujące konfigurację. Typy: string, number, bool, list, map, object. Wartości z CLI, .tfvars lub environment.",
    przykład: `variable "environment" {
  type        = string
  default     = "staging"
  description = "Deployment environment"
}`,
  },
  {
    pojęcie: "Output",
    opis: "Wartości eksportowane po apply — np. IP serwera, ARN zasobu. Używane do przekazywania danych między modułami.",
    przykład: `output "instance_ip" {
  value       = aws_instance.web.public_ip
  description = "Public IP of web server"
}`,
  },
  {
    pojęcie: "Module",
    opis: "Wielokrotnego użytku paczka konfiguracji. Enkapsuluje grupę zasobów z wejściami i wyjściami. Może być lokalny lub z Terraform Registry.",
    przykład: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  cidr    = "10.0.0.0/16"
}`,
  },
  {
    pojęcie: "State",
    opis: "Terraform śledzi stan infrastruktury w terraform.tfstate. Dla teamów — remote state (S3 + DynamoDB locking). Terraform Cloud oferuje managed state.",
    przykład: `terraform {
  backend "s3" {
    bucket         = "tf-state-prod"
    key            = "app/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "tf-locks"
  }
}`,
  },
];

const terraformWorkflow = [
  { krok: "terraform init", opis: "Inicjalizuje katalog roboczy, pobiera providery i moduły z registry. Uruchom po każdej zmianie providerów.", kiedy: "Raz na projekt, po dodaniu nowych providerów" },
  { krok: "terraform validate", opis: "Sprawdza poprawność składni HCL. Szybki check bez łączenia z API.", kiedy: "Przed każdym planem, w CI pipeline" },
  { krok: "terraform plan", opis: "Pokazuje plan zmian: co zostanie created (+), modified (~), destroyed (-). Nic nie zmienia — tylko analiza.", kiedy: "Przed każdym apply, review przez team" },
  { krok: "terraform apply", opis: "Wykonuje zmiany z planu. Pyta o potwierdzenie (lub -auto-approve w CI). Aktualizuje state file.", kiedy: "Po zaakceptowaniu planu przez team" },
  { krok: "terraform destroy", opis: "Usuwa wszystkie zarządzane zasoby. Używaj ostrożnie! Dobry do teardown środowisk dev/test.", kiedy: "Teardown środowisk, oszczędność kosztów" },
];

const terraformBestPractices = [
  { praktyka: "Remote State", opis: "Przechowuj state w S3 + DynamoDB (locking) lub Terraform Cloud. Lokalny state nie nadaje się do pracy zespołowej.", ważność: "Krytyczne" },
  { praktyka: "Moduły dla reużywalności", opis: "Enkapsuluj powtarzające się wzorce w moduły (VPC, EKS cluster, RDS). Moduły z wersjonowaniem.", ważność: "Wysoka" },
  { praktyka: "Workspace lub katalogi", opis: "Separacja środowisk: osobne workspace (prod/staging/dev) lub osobne katalogi z różnymi tfvars.", ważność: "Wysoka" },
  { praktyka: "Plan w CI/CD", opis: "terraform plan automatycznie w pull requestach — diff infra zmiany widoczny w code review.", ważność: "Wysoka" },
  { praktyka: "Nie commituj .tfstate", opis: ".gitignore dla terraform.tfstate i .tfvars z sekretami. State zawiera sensitive data.", ważność: "Bezpieczeństwo" },
  { praktyka: "Terraform fmt i validate", opis: "terraform fmt --recursive formatuje kod. Pre-commit hooks dla automatycznego formatowania.", ważność: "Standardy kodu" },
];

export default function BlogTerraformCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Terraform — co to jest? IaC, HCL, resources i workflow"
        description="Terraform — definicja, Infrastructure as Code, pojęcia (Provider, Resource, Module, State), workflow i best practices. Kompletny przewodnik po Terraform."
        canonicalUrl="https://fotz.pl/blog/terraform-co-to-jest"

        keywords="Terraform co to jest, Terraform definicja, czym jest Terraform, Terraform przykłady, jak działa Terraform, Terraform znaczenie, Terraform przewodnik"

        canonical="https://fotz.pl/blog/terraform-co-to-jest"
      />
      <ArticleSchema
        title="Terraform — co to jest i jak działa? Kompletny przewodnik po IaC"
        description="Kompletny przewodnik po Terraform: Infrastructure as Code, kluczowe pojęcia, workflow i najlepsze praktyki."
        url="https://fotz.pl/blog/terraform-co-to-jest"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Terraform", url: "https://fotz.pl/blog/terraform-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Terraform", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Terraform — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Terraform to narzędzie Infrastructure as Code do zarządzania chmurą jako kodem.
            Poznaj HCL, kluczowe pojęcia (Provider, Resource, Module, State) i workflow wdrożeń.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Terraform?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Terraform</strong> to open-source'owe narzędzie Infrastructure as Code (IaC) firmy HashiCorp.
              Pozwala definiować infrastrukturę chmurową (AWS, Azure, GCP, Kubernetes i ponad 1700 innych providerów)
              w deklaratywnym języku HCL (HashiCorp Configuration Language).
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Zamiast ręcznie tworzyć zasoby w konsolach chmurowych — opisujesz pożądany stan w plikach .tf
              i Terraform sam oblicza różnicę między aktualnym a pożądanym stanem, po czym wykonuje niezbędne zmiany.
              Infrastructure as Code to dziś standard w DevOps i Platform Engineering.
            </p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm text-green-400">
              <p className="text-slate-400 mb-2"># Przykład: tworzenie EC2 i S3 na AWS</p>
              <p>resource "aws_instance" "web" {'{'}</p>
              <p>  ami           = "ami-0c55b159cbfafe1f0"</p>
              <p>  instance_type = "t3.micro"</p>
              <p>  tags = {'{'} Name = "web-server" {'}'}</p>
              <p>{'}'}</p>
              <br />
              <p>resource "aws_s3_bucket" "assets" {'{'}</p>
              <p>  bucket = "my-company-assets-2024"</p>
              <p>{'}'}</p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Pojęcia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe pojęcia Terraform</h2>
            <div className="space-y-4">
              {terraformConcepts.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 font-mono text-purple-700">{c.pojęcie}</h3>
                  <p className="text-slate-600 mb-3">{c.opis}</p>
                  <pre className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
                    {c.przykład}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Workflow */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Workflow Terraform</h2>
            <div className="space-y-3">
              {terraformWorkflow.map((step, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <p className="bg-purple-700 text-white font-mono text-sm px-3 py-1 rounded-lg">{step.krok}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700 mb-1">{step.opis}</p>
                    <p className="text-xs text-slate-400"><strong>Kiedy:</strong> {step.kiedy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Best Practices */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Best Practices Terraform</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {terraformBestPractices.map((bp, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{bp.praktyka}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${bp.ważność === "Krytyczne" ? "bg-red-100 text-red-700" : bp.ważność === "Bezpieczeństwo" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{bp.ważność}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{bp.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Terraform</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="terraform-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
