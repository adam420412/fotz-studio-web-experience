import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';

const app = ts.createSourceFile('App.tsx', fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const { redirects } = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
const routes = new Set();
const clientRedirects = [];
const attribute = (node, name) => node.attributes.properties.find(prop => ts.isJsxAttribute(prop) && prop.name.text === name)?.initializer;

function visit(node) {
  if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(app) === 'Route') {
    const path = attribute(node, 'path');
    const element = attribute(node, 'element');
    if (path && ts.isStringLiteral(path)) {
      routes.add(path.text);
      const component = element && ts.isJsxExpression(element) ? element.expression : undefined;
      if (component && ts.isJsxSelfClosingElement(component) && component.tagName.getText(app) === 'Redirect301') {
        const to = attribute(component, 'to');
        if (to && ts.isStringLiteral(to)) clientRedirects.push({ source: path.text, destination: to.text });
      }
    }
  }
  ts.forEachChild(node, visit);
}
visit(app);

// Wildcard routes can have more-specific auth/admin exceptions. Exact aliases
// must redirect before the SPA fallback can return the homepage with HTTP 200.
for (const client of clientRedirects.filter(route => !/[:*]/.test(route.source))) {
  test(`server and client agree on permanent alias ${client.source}`, () => {
    const matches = redirects.filter(rule => rule.source === client.source && !rule.has && !rule.missing);
    assert.equal(matches.length, 1, 'exactly one unconditional hosting redirect is required');
    assert.equal(matches[0].destination, client.destination);
    assert.ok(matches[0].permanent === true || [301, 308].includes(matches[0].statusCode));
    assert.ok(routes.has(client.destination), `destination route must exist: ${client.destination}`);
    assert.ok(!clientRedirects.some(route => route.source === client.destination), 'alias should target the final page');
  });
}

test('route extraction finds redirects as well as public destinations', () => {
  assert.ok(clientRedirects.length > 0);
  assert.ok(routes.size > clientRedirects.length);
});
