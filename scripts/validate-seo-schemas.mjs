#!/usr/bin/env node
/**
 * Dev-only validator for SEO schema component prop usage on
 * src/pages/AgencjaMarketingowa*.tsx.
 *
 * Reports, in one place:
 *   - Wrong prop names (e.g. `headline` instead of `title`,
 *     `label/href` instead of `name/url`).
 *   - Missing required props per component.
 *   - Wrong types for trivially-checkable string props (passing an
 *     array literal where a string is expected).
 *
 * Usage:  node scripts/validate-seo-schemas.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join, extname } from "node:path";

const PAGES_DIR = "src/pages";
const FILE_GLOB = /^AgencjaMarketingowa.*\.tsx$/;

// Schema definitions mirror src/components/seo/StructuredData.tsx + SEOHead.
// `string[]` means "this prop must be a string array literal".
const SCHEMAS = {
  SEOHead: {
    required: ["title", "description", "canonical"],
    optional: ["ogImage", "ogType", "noIndex", "schemaJson", "keywords", "children"],
    stringProps: ["title", "description", "canonical", "ogImage", "ogType", "keywords"],
  },
  OrganizationSchema: {
    required: [],
    optional: ["name", "url", "logo", "description", "email", "phone", "address", "sameAs"],
    stringProps: ["name", "url", "logo", "description", "email", "phone"],
  },
  LocalBusinessSchema: {
    required: [],
    optional: ["name", "description", "url", "telephone", "email", "priceRange", "openingHours"],
    stringProps: ["name", "description", "url", "telephone", "email", "priceRange"],
  },
  ServiceSchema: {
    required: ["name", "description"],
    optional: ["provider", "areaServed"],
    stringProps: ["name", "description", "provider", "areaServed"],
  },
  BreadcrumbSchema: {
    required: ["items"],
    optional: [],
    itemShape: { required: ["name", "url"], forbidden: ["label", "href"] },
  },
  FAQSchema: {
    required: ["items"],
    optional: [],
    itemShape: { required: ["question", "answer"], forbidden: [] },
  },
  WebPageSchema: {
    required: ["title", "description", "url"],
    optional: [],
    stringProps: ["title", "description", "url"],
  },
  ArticleSchema: {
    required: ["title", "description", "url", "datePublished"],
    optional: ["image", "dateModified", "author"],
    forbidden: ["headline", "authorName"], // common stale prop names
    stringProps: ["title", "description", "url", "image", "datePublished", "dateModified", "author"],
  },
};

/**
 * Naive JSX prop extractor for `<Component ... />` or `<Component ...>`.
 * Returns an array of { component, propsBlock, line } per usage.
 */
function findComponentUsages(source, componentName) {
  const usages = [];
  const re = new RegExp(`<${componentName}\\b`, "g");
  let m;
  while ((m = re.exec(source)) !== null) {
    const start = m.index;
    // Scan forward to the matching `>` that closes the opening tag,
    // tracking braces so we don't stop inside an expression.
    let i = start + componentName.length + 1;
    let depth = 0;
    let end = -1;
    while (i < source.length) {
      const c = source[i];
      if (c === "{") depth++;
      else if (c === "}") depth--;
      else if (c === ">" && depth === 0) {
        // Ignore `=>` arrows inside expressions (depth>0 already handled).
        if (source[i - 1] !== "=") {
          end = i;
          break;
        }
      }
      i++;
    }
    if (end === -1) continue;
    const propsBlock = source.slice(start + componentName.length + 1, end).replace(/\/$/, "");
    const line = source.slice(0, start).split("\n").length;
    usages.push({ propsBlock, line });
  }
  return usages;
}

/** Extract top-level prop names from a JSX props block. */
function extractPropNames(propsBlock) {
  const names = new Set();
  // Match `propName=` or `propName ` (shorthand boolean) at top level.
  const re = /(?:^|\s)([a-zA-Z_$][\w$]*)\s*(?==|\/?>|\s|$)/g;
  let depth = 0;
  let buf = "";
  for (const ch of propsBlock) {
    if (ch === "{") depth++;
    if (ch === "}") depth--;
    if (depth === 0) buf += ch;
    else buf += " "; // mask out expression contents
  }
  let m;
  while ((m = re.exec(buf)) !== null) names.add(m[1]);
  return names;
}

/** Find `items={[...]}` literal and return the raw array body, or null. */
function extractItemsArrayLiteral(propsBlock) {
  const idx = propsBlock.indexOf("items=");
  if (idx === -1) return null;
  const rest = propsBlock.slice(idx + "items=".length).trimStart();
  if (!rest.startsWith("{")) return null;
  // Walk braces to find matching close.
  let depth = 0;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === "{") depth++;
    else if (rest[i] === "}") {
      depth--;
      if (depth === 0) return rest.slice(1, i);
    }
  }
  return null;
}

/** Heuristic: does a string-typed prop receive an array literal? */
function propLooksLikeArray(propsBlock, propName) {
  const re = new RegExp(`\\b${propName}\\s*=\\s*\\{\\s*\\[`);
  return re.test(propsBlock);
}

function validateFile(path) {
  const src = readFileSync(path, "utf8");
  const issues = [];

  for (const [component, def] of Object.entries(SCHEMAS)) {
    const usages = findComponentUsages(src, component);
    for (const { propsBlock, line } of usages) {
      const names = extractPropNames(propsBlock);

      for (const req of def.required ?? []) {
        if (!names.has(req)) {
          issues.push({ line, component, kind: "missing-required", detail: req });
        }
      }
      for (const bad of def.forbidden ?? []) {
        if (names.has(bad)) {
          issues.push({ line, component, kind: "forbidden-prop", detail: bad });
        }
      }
      for (const sp of def.stringProps ?? []) {
        if (names.has(sp) && propLooksLikeArray(propsBlock, sp)) {
          issues.push({ line, component, kind: "string-got-array", detail: sp });
        }
      }
      if (def.itemShape && names.has("items")) {
        const body = extractItemsArrayLiteral(propsBlock);
        if (body) {
          // Only report missing required keys if the literal contains *some*
          // object entries — otherwise the array is empty and we have nothing
          // to inspect. Likewise, skip when the items prop is a variable
          // reference (handled by `body === null` above).
          const hasObjectEntries = /\{[\s\S]*?:[\s\S]*?\}/.test(body);
          for (const f of def.itemShape.forbidden) {
            const re = new RegExp(`\\b${f}\\s*:`);
            if (re.test(body)) {
              issues.push({
                line,
                component,
                kind: "items-wrong-shape",
                detail: `uses '${f}' (expected ${def.itemShape.required.join("/")})`,
              });
            }
          }
          if (hasObjectEntries) {
            for (const r of def.itemShape.required) {
              const re = new RegExp(`\\b${r}\\s*:`);
              if (!re.test(body)) {
                issues.push({
                  line,
                  component,
                  kind: "items-missing-key",
                  detail: r,
                });
              }
            }
          }
        }
      }
    }
  }
  return issues;
}

function main() {
  const files = readdirSync(PAGES_DIR)
    .filter((f) => FILE_GLOB.test(f))
    .map((f) => join(PAGES_DIR, f))
    .sort();

  let total = 0;
  const report = [];
  const records = [];
  for (const f of files) {
    const issues = validateFile(f);
    if (issues.length === 0) continue;
    total += issues.length;
    report.push(`\n  ${f}`);
    for (const i of issues) {
      report.push(`    L${i.line}  ${i.component}  [${i.kind}]  ${i.detail}`);
      records.push({ file: f, line: i.line, component: i.component, kind: i.kind, detail: i.detail });
    }
  }

  // Optional --report=<path> export (.json or .csv inferred from extension).
  const reportArg = process.argv.find((a) => a.startsWith("--report="));
  if (reportArg) {
    const outPath = reportArg.slice("--report=".length);
    const ext = extname(outPath).toLowerCase();
    if (ext === ".csv") {
      const esc = (v) => {
        const s = String(v ?? "");
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
      };
      const lines = ["file,line,component,kind,detail"];
      for (const r of records) lines.push([r.file, r.line, r.component, r.kind, r.detail].map(esc).join(","));
      writeFileSync(outPath, lines.join("\n") + "\n");
    } else {
      writeFileSync(
        outPath,
        JSON.stringify(
          { scannedFiles: files.length, totalIssues: total, generatedAt: new Date().toISOString(), issues: records },
          null,
          2,
        ) + "\n",
      );
    }
    console.log(`  → report written to ${outPath}`);
  }

  const header = `\nSEO schema validator — ${files.length} files scanned`;
  if (total === 0) {
    console.log(`${header}\n  ✓ No issues found.`);
    process.exit(0);
  }
  console.log(`${header}\n  ✗ ${total} issue(s):`);
  console.log(report.join("\n"));
  process.exit(1);
}

import { fileURLToPath } from "node:url";
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  main();
}

export { SCHEMAS };