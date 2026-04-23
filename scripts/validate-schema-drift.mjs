#!/usr/bin/env node
/**
 * Drift detector: ensures scripts/validate-seo-schemas.mjs stays in sync
 * with the prop interfaces declared in src/components/seo/StructuredData.tsx.
 *
 * Strategy:
 *   1. Parse StructuredData.tsx, extract every `interface XxxSchemaProps`
 *      (and the SEOHead props from SEOHead.tsx) into { required, optional } sets.
 *   2. Load the SCHEMAS map from validate-seo-schemas.mjs (dynamic import).
 *   3. Diff. Any added/removed/renamed prop or required-flag change fails CI.
 *
 * Usage:  node scripts/validate-schema-drift.mjs
 * Exit:   0 on parity, 1 on drift.
 */
import { readFileSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const SOURCES = [
  { file: "src/components/seo/StructuredData.tsx", interfaces: /interface\s+(\w+SchemaProps)\s*\{([^}]*)\}/g },
  { file: "src/components/seo/SEOHead.tsx", interfaces: /interface\s+(SEOHeadProps)\s*\{([^}]*)\}/g },
];

// Map interface name -> validator key in SCHEMAS
const INTERFACE_TO_SCHEMA = {
  SEOHeadProps: "SEOHead",
  OrganizationSchemaProps: "OrganizationSchema",
  LocalBusinessSchemaProps: "LocalBusinessSchema",
  ServiceSchemaProps: "ServiceSchema",
  BreadcrumbSchemaProps: "BreadcrumbSchema",
  FAQSchemaProps: "FAQSchema",
  WebPageSchemaProps: "WebPageSchema",
  ArticleSchemaProps: "ArticleSchema",
};

function parseInterfaceBody(body) {
  // Split on `;` or newlines, ignore comments.
  const required = [];
  const optional = [];
  body
    .split(/[;\n]/)
    .map((l) => l.replace(/\/\/.*$/, "").trim())
    .filter(Boolean)
    .forEach((line) => {
      const m = line.match(/^(\w+)(\?)?\s*:/);
      if (!m) return;
      (m[2] ? optional : required).push(m[1]);
    });
  return { required: required.sort(), optional: optional.sort() };
}

function extractDeclared() {
  const declared = {};
  for (const { file, interfaces } of SOURCES) {
    if (!existsSync(file)) continue;
    const src = readFileSync(file, "utf8");
    let m;
    interfaces.lastIndex = 0;
    while ((m = interfaces.exec(src)) !== null) {
      const key = INTERFACE_TO_SCHEMA[m[1]];
      if (!key) continue;
      declared[key] = parseInterfaceBody(m[2]);
    }
  }
  return declared;
}

function normalizeValidator(s) {
  return {
    required: [...(s.required ?? [])].sort(),
    optional: [...(s.optional ?? [])].sort(),
  };
}

function diff(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  const added = [...setB].filter((x) => !setA.has(x));
  const removed = [...setA].filter((x) => !setB.has(x));
  return { added, removed };
}

const declared = extractDeclared();
const { SCHEMAS } = await import(pathToFileURL(resolve("scripts/validate-seo-schemas.mjs")).href);

let drift = 0;
const lines = [];

for (const [name, decl] of Object.entries(declared)) {
  const validator = SCHEMAS[name];
  if (!validator) {
    drift++;
    lines.push(`✗ ${name}: missing from SCHEMAS in validate-seo-schemas.mjs`);
    continue;
  }
  const v = normalizeValidator(validator);
  // Treat all declared props (required ∪ optional) as the source of truth.
  const declaredAll = [...decl.required, ...decl.optional].sort();
  const validatorAll = [...v.required, ...v.optional].sort();

  const propsDiff = diff(validatorAll, declaredAll);
  const reqDiff = diff(v.required, decl.required);

  if (propsDiff.added.length || propsDiff.removed.length || reqDiff.added.length || reqDiff.removed.length) {
    drift++;
    lines.push(`✗ ${name}`);
    if (propsDiff.added.length) lines.push(`    + new props in source:        ${propsDiff.added.join(", ")}`);
    if (propsDiff.removed.length) lines.push(`    - stale props in validator:   ${propsDiff.removed.join(", ")}`);
    if (reqDiff.added.length) lines.push(`    ! newly required in source:    ${reqDiff.added.join(", ")}`);
    if (reqDiff.removed.length) lines.push(`    ! no longer required:          ${reqDiff.removed.join(", ")}`);
  } else {
    lines.push(`✓ ${name} (${decl.required.length} required, ${decl.optional.length} optional)`);
  }
}

// Detect SCHEMAS entries with no declared interface (likely stale).
for (const name of Object.keys(SCHEMAS)) {
  if (!declared[name]) {
    drift++;
    lines.push(`✗ ${name}: present in SCHEMAS but no matching interface found in StructuredData.tsx/SEOHead.tsx`);
  }
}

console.log("SEO schema drift check");
console.log("======================");
lines.forEach((l) => console.log(l));
console.log("");
if (drift > 0) {
  console.error(`✗ ${drift} drift issue(s) detected. Update scripts/validate-seo-schemas.mjs SCHEMAS to match the component interfaces.`);
  process.exit(1);
}
console.log(`✓ Validator is in sync with ${Object.keys(declared).length} schema interface(s).`);
