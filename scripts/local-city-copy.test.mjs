import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import ts from 'typescript';
const require=createRequire(import.meta.url);
const code=ts.transpileModule(fs.readFileSync(new URL('../src/components/seo/LocalSEOBoost.tsx',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX}}).outputText;
const context={exports:{},require};vm.runInNewContext(code,context);const Component=context.exports.default;
test('local copy uses genitive after z/spoza/do and locative after w',()=>{
  for(const [city,cityLocative,cityGenitive,variant,voivodeshipLocative] of [
    ['Szczecin','Szczecinie','Szczecina','agency','zachodniopomorskim'],
    ['Bydgoszcz','Bydgoszczy','Bydgoszczy','agency','kujawsko-pomorskim'],
    ['Lublin','Lublinie','Lublina','agency','lubelskim'],
    ['Toruń','Toruniu','Torunia','websites','kujawsko-pomorskim'],
    ['Zielona Góra','Zielonej Górze','Zielonej Góry','websites','lubuskim'],
    ['Poznań','Poznaniu','Poznania','ecommerce','wielkopolskim'],
  ]){
    const html=renderToStaticMarkup(createElement(Component,{city,cityLocative,cityGenitive,variant,voivodeshipLocative}));
    assert.ok(html.includes(`dla firm z ${cityGenitive}`));
    assert.ok(html.includes(`obsługujemy w ${cityLocative}`));
    assert.ok(html.includes(`pytania od firm z ${cityGenitive}`));
    if(variant==='agency'){
      assert.ok(html.includes(`spoza ${cityGenitive}`));
      assert.ok(html.includes(`efekty marketingu w ${cityLocative}`));
    }
    assert.ok(!html.includes(`z ${cityLocative} i`));
  }
});
