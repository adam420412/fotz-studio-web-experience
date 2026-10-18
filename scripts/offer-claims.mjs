// Detects promises and statistics that reviewed offers must not publish without
// evidence: growth percentages, fixed prices, guaranteed rankings, ratings and
// local offices outside Poznań. A sentence that negates the claim ("Nie
// gwarantujemy TOP 3") is allowed, because reviewed offers explain limits.
import fs from 'node:fs';
import ts from 'typescript';

export const claimRules = [
  { id: 'percent', label: 'procent lub statystyka', pattern: /[+\-−]?\s?\d+(?:[.,]\d+)?\s?%/u },
  { id: 'price', label: 'stała cena', pattern: /\d[\d\s.]*(?:,\d+)?\s?(?:zł|zl|PLN)(?!\p{L})/u },
  { id: 'ranking', label: 'obietnica pozycji', pattern: /\bTOP\s?\d+\b|\b(?:pierwsz\p{L}*|1\.)\s+(?:miejsc\p{L}*|pozycj\p{L}*)/iu },
  { id: 'guarantee', label: 'gwarancja wyniku', pattern: /gwarant\p{L}*|gwarancj\p{L}*\s+(?:\p{L}+\s+)?(?:wynik|skuteczn|pozycj|efekt|zadowolen|jakości|ROI|sprzeda|terminow)\p{L}*/iu },
  { id: 'certified', label: 'certyfikat bez dowodu', pattern: /certyfikowan\p{L}*/iu },
  { id: 'rating', label: 'ocena lub opinia', pattern: /ratingValue|\b\d[,.]\d\s?\/\s?5\b|★/u },
  { id: 'count', label: 'liczba klientów, realizacji lub lat', pattern: /(?<![\p{L}\d])\d[\d\s.]*\+?\s?(?:(?:zadowolonych\s+)?klient\p{L}*|(?:zrealizowanych|wdrożonych|udanych|przeprowadzonych)\s+\p{L}+|opini\p{L}*|lat\s+(?:doświadcz|na\s+rynku|pracy)\p{L}*)/iu },
  { id: 'office', label: 'biuro poza Poznaniem', pattern: /\b(?:biur\p{L}*|oddzia\p{L}*)\s+w\s+(?!Poznaniu)\p{Lu}\p{L}+|\b(?:nasz\p{L}*|FOTZ\p{L}*)\s+(?:\p{L}+\s+){0,3}siedzib\p{L}*\s+w\s+(?!Poznaniu)\p{Lu}\p{L}+/u },
];

// Negations that turn a claim into a stated limit of the offer.
const negation = /(?:^|[^\p{L}])(?:nie|bez|żadn\p{L}*|ani)(?=[^\p{L}]|$)/iu;

export function sentences(text) {
  return text.split(/(?<=[.!?])\s+|\n+/u).map(item => item.trim()).filter(Boolean);
}

export function findClaims(text) {
  const found = [];
  for (const sentence of sentences(text)) {
    // A question (FAQ heading) asks about a claim; its answer is checked separately.
    if (sentence.endsWith('?')) continue;
    for (const rule of claimRules) {
      const match = sentence.match(rule.pattern);
      if (!match) continue;
      const before = sentence.slice(0, match.index);
      if (negation.test(before)) continue;
      // "Gwarancji pozycji nie dajemy": a guarantee negated later in the sentence is a stated limit too.
      if (rule.id === 'guarantee' && negation.test(sentence.slice(match.index))) continue;
      found.push({ rule: rule.id, label: rule.label, match: match[0].trim(), sentence });
    }
  }
  return found;
}

/** Visible copy from a TSX page: string literals, templates and JSX text. */
export function pageCopy(file) {
  const source = ts.createSourceFile(String(file), fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const parts = [];
  const skip = node => ts.isImportDeclaration(node) || ts.isExportDeclaration(node);
  const attrName = node => ts.isJsxAttribute(node.parent) ? node.parent.name.getText(source) : '';
  const cssColor = /^\s*(?:hsla?|rgba?)\(/i;
  const technical = new Set(['className', 'href', 'to', 'src', 'srcSet', 'sizes', 'id', 'aria-labelledby', 'canonical', 'image', 'key', 'rel', 'target', 'type', 'loading', 'fetchPriority']);
  function visit(node) {
    if (skip(node)) return;
    if (ts.isTemplateExpression(node) && !technical.has(attrName(node))) {
      // Template copy with substitutions (e.g. `od 2 500 zł w ${city}`): keep the literal parts.
      parts.push([node.head.text, ...node.templateSpans.map(span => span.literal.text)].join(' … '));
    } else if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && !technical.has(attrName(node)) && !cssColor.test(node.text)) {
      const parent = node.parent;
      const key = parent && ts.isPropertyAssignment(parent) && parent.initializer === node ? parent.name.getText(source).replace(/["']/g, '') : '';
      if (!['path', 'href', 'image', 'link', 'url', 'src'].includes(key)) parts.push(node.text);
    } else if (ts.isObjectLiteralExpression(node)) {
      // Animated counters: { value: 500, suffix: '+', label: 'klientów' } render as "500+ klientów".
      const prop = name => node.properties.find(p => ts.isPropertyAssignment(p) && p.name.getText(source).replace(/["']/g, '') === name)?.initializer;
      const num = prop('value') ?? prop('end');
      if (num && ts.isNumericLiteral(num)) {
        const text = n => (n && (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) ? n.text : '');
        parts.push(`${text(prop('prefix'))}${num.text}${text(prop('suffix'))} ${text(prop('label'))}`.trim() + '.');
      }
    } else if (ts.isJsxText(node)) {
      const text = node.getText(source).replace(/\s+/g, ' ').trim();
      if (text) parts.push(text);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  return parts.join('\n');
}

/** Route path → page source file, read from App.tsx lazy imports. */
export function routeFiles(appFile) {
  const app = ts.createSourceFile(String(appFile), fs.readFileSync(appFile, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const imports = new Map();
  const routes = new Map();
  const attr = (node, name) => node.attributes.properties.find(prop => ts.isJsxAttribute(prop) && prop.name.text === name)?.initializer;
  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isCallExpression(node.initializer) && node.initializer.expression.getText(app) === 'lazy') {
      const spec = node.initializer.getText(app).match(/import\(["'](.+?)["']\)/)?.[1];
      if (spec) imports.set(node.name.getText(app), spec);
    }
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(app) === 'Route') {
      const path = attr(node, 'path');
      const element = attr(node, 'element');
      const component = element && ts.isJsxExpression(element) ? element.expression : undefined;
      if (path && ts.isStringLiteral(path) && component && ts.isJsxSelfClosingElement(component)) routes.set(path.text, component.tagName.getText(app));
    }
    ts.forEachChild(node, visit);
  }
  visit(app);
  const result = new Map();
  for (const [path, component] of routes) {
    const spec = imports.get(component);
    if (spec) result.set(path, new URL(`../src/${spec.replace(/^\.\//, '')}.tsx`, import.meta.url));
  }
  return result;
}
