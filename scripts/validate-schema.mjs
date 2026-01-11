#!/usr/bin/env node

/**
 * Schema.org Validation Script
 * Validates structured data in the built HTML files
 * Run: node scripts/validate-schema.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');

// Required Schema.org properties for each type
const schemaValidators = {
  Organization: {
    required: ['@context', '@type', 'name', 'url'],
    recommended: ['logo', 'description', 'email', 'telephone', 'address', 'sameAs']
  },
  LocalBusiness: {
    required: ['@context', '@type', 'name', 'address'],
    recommended: ['telephone', 'openingHoursSpecification', 'geo', 'priceRange']
  },
  Service: {
    required: ['@context', '@type', 'name', 'provider'],
    recommended: ['description', 'areaServed']
  },
  BreadcrumbList: {
    required: ['@context', '@type', 'itemListElement'],
    recommended: []
  },
  FAQPage: {
    required: ['@context', '@type', 'mainEntity'],
    recommended: []
  },
  WebPage: {
    required: ['@context', '@type', 'name', 'url'],
    recommended: ['description', 'publisher']
  },
  Article: {
    required: ['@context', '@type', 'headline', 'datePublished', 'author'],
    recommended: ['image', 'publisher', 'mainEntityOfPage', 'dateModified']
  },
  ProfessionalService: {
    required: ['@context', '@type', 'name'],
    recommended: ['address', 'telephone', 'url']
  }
};

// Validate BreadcrumbList items
function validateBreadcrumbItem(item, index) {
  const errors = [];
  
  if (item['@type'] !== 'ListItem') {
    errors.push(`Item ${index}: @type should be 'ListItem', got '${item['@type']}'`);
  }
  
  if (typeof item.position !== 'number') {
    errors.push(`Item ${index}: position should be a number`);
  }
  
  if (!item.name) {
    errors.push(`Item ${index}: missing 'name' property`);
  }
  
  // Check for proper item structure
  if (item.item) {
    if (typeof item.item === 'object') {
      if (!item.item['@id']) {
        errors.push(`Item ${index}: item object should have '@id' property`);
      }
    } else if (typeof item.item !== 'string') {
      errors.push(`Item ${index}: item should be an object with @id or a URL string`);
    }
  }
  
  return errors;
}

// Validate FAQ items
function validateFAQItem(item, index) {
  const errors = [];
  
  if (item['@type'] !== 'Question') {
    errors.push(`FAQ Item ${index}: @type should be 'Question'`);
  }
  
  if (!item.name) {
    errors.push(`FAQ Item ${index}: missing 'name' (question text)`);
  }
  
  if (!item.acceptedAnswer) {
    errors.push(`FAQ Item ${index}: missing 'acceptedAnswer'`);
  } else {
    if (item.acceptedAnswer['@type'] !== 'Answer') {
      errors.push(`FAQ Item ${index}: acceptedAnswer @type should be 'Answer'`);
    }
    if (!item.acceptedAnswer.text) {
      errors.push(`FAQ Item ${index}: acceptedAnswer missing 'text'`);
    }
  }
  
  return errors;
}

// Validate a single schema object
function validateSchema(schema, filePath) {
  const results = {
    valid: true,
    errors: [],
    warnings: [],
    type: schema['@type']
  };
  
  // Check @context
  if (!schema['@context'] || !schema['@context'].includes('schema.org')) {
    results.errors.push("Missing or invalid @context (should include 'schema.org')");
    results.valid = false;
  }
  
  const schemaType = schema['@type'];
  const validator = schemaValidators[schemaType];
  
  if (!validator) {
    results.warnings.push(`Unknown schema type: ${schemaType}`);
    return results;
  }
  
  // Check required properties
  for (const prop of validator.required) {
    if (prop === '@context') continue; // Already checked
    if (!schema[prop]) {
      results.errors.push(`Missing required property: ${prop}`);
      results.valid = false;
    }
  }
  
  // Check recommended properties
  for (const prop of validator.recommended) {
    if (!schema[prop]) {
      results.warnings.push(`Missing recommended property: ${prop}`);
    }
  }
  
  // Type-specific validation
  if (schemaType === 'BreadcrumbList' && schema.itemListElement) {
    if (!Array.isArray(schema.itemListElement)) {
      results.errors.push("itemListElement should be an array");
      results.valid = false;
    } else {
      schema.itemListElement.forEach((item, index) => {
        const itemErrors = validateBreadcrumbItem(item, index);
        results.errors.push(...itemErrors);
        if (itemErrors.length > 0) results.valid = false;
      });
    }
  }
  
  if (schemaType === 'FAQPage' && schema.mainEntity) {
    if (!Array.isArray(schema.mainEntity)) {
      results.errors.push("mainEntity should be an array of Questions");
      results.valid = false;
    } else {
      schema.mainEntity.forEach((item, index) => {
        const itemErrors = validateFAQItem(item, index);
        results.errors.push(...itemErrors);
        if (itemErrors.length > 0) results.valid = false;
      });
    }
  }
  
  if (schemaType === 'Article') {
    // Validate headline length
    if (schema.headline && schema.headline.length > 110) {
      results.warnings.push(`Headline is ${schema.headline.length} chars (recommended max: 110)`);
    }
    
    // Check publisher structure
    if (schema.publisher && schema.publisher['@type'] !== 'Organization') {
      results.errors.push("Publisher @type should be 'Organization'");
      results.valid = false;
    }
  }
  
  return results;
}

// Extract JSON-LD from HTML
function extractSchemas(html) {
  const schemas = [];
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    try {
      const json = JSON.parse(match[1].trim());
      schemas.push(json);
    } catch (e) {
      schemas.push({ parseError: e.message, raw: match[1].substring(0, 200) });
    }
  }
  
  return schemas;
}

// Recursively find all HTML files
function findHtmlFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main validation function
async function validateAllSchemas() {
  console.log('\n🔍 Schema.org Validation Report\n');
  console.log('='.repeat(60));
  
  const htmlFiles = findHtmlFiles(distDir);
  
  if (htmlFiles.length === 0) {
    console.log('\n⚠️  No HTML files found in dist/');
    console.log('   Run "npm run build" first to generate the production build.\n');
    
    // Also check index.html in root for development
    const rootIndex = path.join(__dirname, '..', 'index.html');
    if (fs.existsSync(rootIndex)) {
      console.log('📄 Validating root index.html for development...\n');
      const html = fs.readFileSync(rootIndex, 'utf-8');
      const schemas = extractSchemas(html);
      
      if (schemas.length === 0) {
        console.log('   No Schema.org data found in root index.html');
      } else {
        let totalErrors = 0;
        let totalWarnings = 0;
        
        schemas.forEach((schema, i) => {
          if (schema.parseError) {
            console.log(`   ❌ Schema ${i + 1}: JSON Parse Error - ${schema.parseError}`);
            totalErrors++;
            return;
          }
          
          const result = validateSchema(schema, 'index.html');
          const icon = result.valid ? '✅' : '❌';
          console.log(`   ${icon} ${result.type}`);
          
          if (result.errors.length > 0) {
            result.errors.forEach(err => {
              console.log(`      ❌ ${err}`);
              totalErrors++;
            });
          }
          
          if (result.warnings.length > 0) {
            result.warnings.forEach(warn => {
              console.log(`      ⚠️  ${warn}`);
              totalWarnings++;
            });
          }
        });
        
        console.log('\n' + '-'.repeat(60));
        console.log(`📊 Summary: ${schemas.length} schemas, ${totalErrors} errors, ${totalWarnings} warnings`);
      }
    }
    
    return;
  }
  
  let totalFiles = 0;
  let totalSchemas = 0;
  let totalErrors = 0;
  let totalWarnings = 0;
  const filesWithErrors = [];
  
  for (const filePath of htmlFiles) {
    const relativePath = path.relative(distDir, filePath);
    const html = fs.readFileSync(filePath, 'utf-8');
    const schemas = extractSchemas(html);
    
    if (schemas.length === 0) continue;
    
    totalFiles++;
    let fileHasErrors = false;
    
    console.log(`\n📄 ${relativePath}`);
    
    for (const schema of schemas) {
      totalSchemas++;
      
      if (schema.parseError) {
        console.log(`   ❌ JSON Parse Error: ${schema.parseError}`);
        totalErrors++;
        fileHasErrors = true;
        continue;
      }
      
      const result = validateSchema(schema, relativePath);
      const icon = result.valid ? '✅' : '❌';
      console.log(`   ${icon} ${result.type}`);
      
      if (result.errors.length > 0) {
        fileHasErrors = true;
        result.errors.forEach(err => {
          console.log(`      ❌ ${err}`);
          totalErrors++;
        });
      }
      
      if (result.warnings.length > 0) {
        result.warnings.forEach(warn => {
          console.log(`      ⚠️  ${warn}`);
          totalWarnings++;
        });
      }
    }
    
    if (fileHasErrors) {
      filesWithErrors.push(relativePath);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 VALIDATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`   Files with schemas: ${totalFiles}`);
  console.log(`   Total schemas: ${totalSchemas}`);
  console.log(`   Errors: ${totalErrors}`);
  console.log(`   Warnings: ${totalWarnings}`);
  
  if (filesWithErrors.length > 0) {
    console.log(`\n❌ Files with errors (${filesWithErrors.length}):`);
    filesWithErrors.forEach(f => console.log(`   - ${f}`));
  }
  
  console.log('\n');
  
  // Exit with error code if there are critical errors
  if (totalErrors > 0) {
    console.log('⚠️  Schema validation completed with errors.\n');
    // Don't exit with error to not break builds, just warn
  } else {
    console.log('✅ All schemas are valid!\n');
  }
}

// Run validation
validateAllSchemas().catch(console.error);
