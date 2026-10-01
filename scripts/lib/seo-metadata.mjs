import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const cache = new Map();
const SRC = fileURLToPath(new URL('../../src/', import.meta.url));
const jsxStrings = new Map();
// TypeScript's JSX transform decodes entities exactly as it does in the app.
// Parse its output as data; never evaluate the emitted JavaScript.
function jsxString(node, context) {
  if (!node.text.includes('&')) return node.text;
  const raw = node.getText(context.source);
  if (jsxStrings.has(raw)) return jsxStrings.get(raw);
  const emitted = ts.transpileModule(`const element = <x value=${raw} />;`, {
    compilerOptions: { jsx: ts.JsxEmit.React, target: ts.ScriptTarget.Latest },
  }).outputText;
  const ast = ts.createSourceFile('literal.js', emitted, ts.ScriptTarget.Latest, true);
  let value = node.text;
  const visit = child => {
    if (ts.isPropertyAssignment(child) && child.name.getText(ast) === 'value' && ts.isStringLiteral(child.initializer)) value = child.initializer.text;
    ts.forEachChild(child, visit);
  };
  visit(ast);
  jsxStrings.set(raw, value);
  return value;
}
// Read literal metadata only. Never execute page code or its imports at build time.
export function readSource(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const scope = new Map();
  const result = { source, scope, file };
  cache.set(file, result);
  const visit = node => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) scope.set(node.name.text, node.initializer);
    ts.forEachChild(node, visit);
  };
  visit(source);
  return result;
}

export function literal(node, context, seen = new Set()) {
  if (!node) return undefined;
  if (ts.isStringLiteral(node) && node.parent && ts.isJsxAttribute(node.parent)) return jsxString(node, context);
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isNumericLiteral(node)) return node.text;
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isJsxExpression(node) || ts.isParenthesizedExpression(node) || ts.isAsExpression(node) || ts.isSatisfiesExpression(node)) return literal(node.expression, context, seen);
  if (ts.isTemplateExpression(node)) {
    let value = node.head.text;
    for (const span of node.templateSpans) {
      const part = literal(span.expression, context, seen);
      if (typeof part !== 'string') return undefined;
      value += part + span.literal.text;
    }
    return value;
  }
  if (ts.isPropertyAccessExpression(node)) return literal(node.expression, context, seen)?.[node.name.text];
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(p => [p.name.getText(context.source).replace(/^["']|["']$/g, ''), literal(p.initializer, context, seen)]));
  }
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(e => literal(e, context, seen));
  if (ts.isIdentifier(node)) {
    const key = `${context.file}:${node.text}`;
    if (seen.has(key)) return undefined;
    const next = new Set([...seen, key]);
    if (context.scope.has(node.text)) return literal(context.scope.get(node.text), context, next);
    for (const stmt of context.source.statements.filter(ts.isImportDeclaration)) {
      const bindings = stmt.importClause?.namedBindings;
      if (!bindings || !ts.isNamedImports(bindings)) continue;
      const entry = bindings.elements.find(e => e.name.text === node.text);
      if (!entry) continue;
      const spec = stmt.moduleSpecifier.text;
      if (!spec.startsWith('@/') && !spec.startsWith('.')) return undefined;
      const base = spec.startsWith('@/') ? path.resolve(SRC, spec.slice(2)) : path.resolve(path.dirname(context.file), spec);
      const file = [base, `${base}.ts`, `${base}.tsx`].find(f => fs.existsSync(f) && fs.statSync(f).isFile());
      if (!file) return undefined;
      const imported = readSource(file);
      return literal(imported.scope.get(entry.propertyName?.text ?? entry.name.text), imported, next);
    }
  }
  return undefined;
}

export function extractMetadata(file) {
  const context = readSource(file);
  let props;
  const visit = node => {
    if (props) return;
    if ((ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) && node.tagName.getText(context.source) === 'SEOHead') {
      props = Object.fromEntries(node.attributes.properties.filter(ts.isJsxAttribute).map(p => [p.name.text, p.initializer ? literal(p.initializer, context) : true]));
    }
    ts.forEachChild(node, visit);
  };
  visit(context.source);
  if (!props?.title || !props.canonical) return null;
  return {
    title: props.title.trim(), description: (props.description || '').trim(),
    canonical: new URL(props.canonical, 'https://fotz.pl').href.replace(/\/+$/, ''),
    ogImage: props.og?.image ?? props.ogImage ?? 'https://fotz.pl/og-image.jpg',
    ogType: props.og?.type ?? props.ogType ?? 'website',
    ogTitle: props.og?.title ?? props.title.trim(),
    ogDescription: props.og?.description ?? (props.description || '').trim(),
    noIndex: props.noIndex === true,
    keywords: Array.isArray(props.keywords) ? props.keywords.join(', ') : props.keywords,
  };
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
}
