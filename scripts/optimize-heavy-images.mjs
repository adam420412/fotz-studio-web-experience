#!/usr/bin/env node

/**
 * Heavy Image Optimization Script
 * Specifically targets images >2MB and converts them to optimized WebP
 * 
 * Usage: node scripts/optimize-heavy-images.mjs
 * 
 * Requires: npm install sharp (already installed)
 */

import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { existsSync } from 'fs';

// Target heavy images identified from PWA build error
const HEAVY_IMAGES = [
  'src/assets/wizualizacje/viz-18.png',
  'src/assets/wizualizacje/viz-19.png',
  'src/assets/wizualizacje/viz-20.png',
  'src/assets/wizualizacje/viz-21.png',
  'src/assets/wizualizacje/viz-22.png',
  'src/assets/backstage/backstage-1.png',
  'src/assets/backstage/backstage-2.png',
  'src/assets/backstage/backstage-3.png',
  'src/assets/backstage/backstage-6.png',
  'src/assets/backstage/session-final-1.png',
  'src/assets/backstage/session-final-2.png',
  'src/assets/fotograf/portrait-4.jpg',
  'src/assets/fotograf/portrait-5.png',
  'src/assets/fotograf/portrait-7.png',
  'src/assets/fotograf/concert-1.jpg',
  'src/assets/fotograf/concert-3.png',
  'src/assets/fotograf/concert-7.jpg',
  'src/assets/fotograf/event-1.jpg',
  'src/assets/medyczny/gabinet-stomatologiczny.jpg',
  'src/assets/medyczny/konsultacja-rtg.jpg',
  'src/assets/enea/conference-league.jpg',
];

async function optimizeHeavyImages() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (e) {
    console.error('❌ Sharp not installed. Run: npm install sharp');
    process.exit(1);
  }

  const maxWidth = 1920; // Max width for any image
  const quality = 80; // WebP quality (good balance)
  
  let processed = 0;
  let totalSaved = 0;
  const results = [];

  console.log('🖼️  Optimizing heavy images (>2MB) to WebP...\n');
  console.log(`   Max width: ${maxWidth}px`);
  console.log(`   Quality: ${quality}%`);
  console.log(`   Format: WebP\n`);
  console.log('='.repeat(60));

  for (const filePath of HEAVY_IMAGES) {
    if (!existsSync(filePath)) {
      console.log(`⚠️  Skipping (not found): ${filePath}`);
      continue;
    }

    try {
      const stats = await stat(filePath);
      const originalSizeKB = stats.size / 1024;
      const originalSizeMB = originalSizeKB / 1024;

      const ext = extname(filePath).toLowerCase();
      const nameWithoutExt = basename(filePath, ext);
      const dir = dirname(filePath);
      
      // Create WebP version
      const webpPath = join(dir, `${nameWithoutExt}.webp`);
      
      await sharp(filePath)
        .resize(maxWidth, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality })
        .toFile(webpPath);

      const webpStats = await stat(webpPath);
      const webpSizeKB = webpStats.size / 1024;
      const webpSizeMB = webpSizeKB / 1024;

      const savedKB = originalSizeKB - webpSizeKB;
      const savedMB = savedKB / 1024;
      const savingsPercent = ((savedKB / originalSizeKB) * 100).toFixed(1);

      totalSaved += savedKB;
      processed++;

      console.log(`\n✅ ${basename(filePath)}`);
      console.log(`   ${originalSizeMB.toFixed(2)}MB → ${webpSizeMB.toFixed(2)}MB`);
      console.log(`   Saved: ${savedMB.toFixed(2)}MB (${savingsPercent}%)`);

      results.push({
        original: filePath,
        webp: webpPath,
        originalMB: originalSizeMB.toFixed(2),
        webpMB: webpSizeMB.toFixed(2),
        savedMB: savedMB.toFixed(2),
        savingsPercent
      });

    } catch (e) {
      console.error(`❌ Error processing ${filePath}: ${e.message}`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`\n   Processed: ${processed} images`);
  console.log(`   Total saved: ${(totalSaved / 1024).toFixed(2)} MB`);
  
  console.log('\n📝 NEXT STEPS:');
  console.log('   1. Update imports in components to use .webp files');
  console.log('   2. Optionally delete original heavy files');
  console.log('   3. Re-run build to verify PWA limits are resolved');

  // Show files to update
  console.log('\n📁 FILES CREATED:');
  results.forEach(r => {
    console.log(`   ${r.webp}`);
  });
}

optimizeHeavyImages().catch(console.error);
