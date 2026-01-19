#!/usr/bin/env node

/**
 * Image Optimization Script
 * Resizes and converts images to WebP format with aggressive compression
 * 
 * Usage: node scripts/optimize-images.mjs
 * 
 * This script will:
 * 1. Find all JPG/PNG images in src/assets/
 * 2. Resize images larger than 1600px width
 * 3. Convert to WebP with optimized quality
 * 4. Create multiple responsive sizes (320, 640, 768, 1024, 1280, 1536)
 * 5. Generate a report of savings
 */

import { readdir, stat, writeFile, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { existsSync } from 'fs';

async function* walkDir(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = join(dir, file.name);
    if (file.isDirectory()) {
      yield* walkDir(filePath);
    } else {
      yield filePath;
    }
  }
}

async function optimizeImages() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch (e) {
    console.error('❌ Sharp not installed. Run: npm install sharp');
    process.exit(1);
  }

  const srcDir = 'src/assets';
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const maxWidth = 1600;
  const quality = 75; // WebP quality (0-100)
  const responsiveSizes = [320, 640, 768, 1024, 1280, 1536];

  let processed = 0;
  let skipped = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const results = [];

  console.log('🖼️  Starting image optimization...\n');
  console.log(`   Max width: ${maxWidth}px`);
  console.log(`   Quality: ${quality}%`);
  console.log(`   Format: WebP`);
  console.log(`   Responsive sizes: ${responsiveSizes.join(', ')}px\n`);

  if (!existsSync(srcDir)) {
    console.error(`❌ Directory not found: ${srcDir}`);
    process.exit(1);
  }

  for await (const filePath of walkDir(srcDir)) {
    const ext = extname(filePath).toLowerCase();
    
    if (!imageExtensions.includes(ext)) continue;

    try {
      const stats = await stat(filePath);
      const originalSizeKB = stats.size / 1024;
      totalOriginalSize += originalSizeKB;

      const image = sharp(filePath);
      const metadata = await image.metadata();
      const { width, height } = metadata;

      // Skip small images
      if (originalSizeKB < 50) {
        skipped++;
        continue;
      }

      const nameWithoutExt = basename(filePath, ext);
      const dir = dirname(filePath);
      
      // Create main WebP version (resized if needed)
      const targetWidth = Math.min(width, maxWidth);
      const webpPath = join(dir, `${nameWithoutExt}.webp`);
      
      await sharp(filePath)
        .resize(targetWidth, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality })
        .toFile(webpPath);

      const webpStats = await stat(webpPath);
      const webpSizeKB = webpStats.size / 1024;
      totalOptimizedSize += webpSizeKB;

      const savings = originalSizeKB - webpSizeKB;
      const savingsPercent = ((savings / originalSizeKB) * 100).toFixed(1);

      results.push({
        file: filePath.replace(srcDir + '/', ''),
        originalKB: originalSizeKB.toFixed(0),
        webpKB: webpSizeKB.toFixed(0),
        savings: savings.toFixed(0),
        savingsPercent,
        dimensions: `${width}x${height} → ${targetWidth}x${Math.round(height * (targetWidth / width))}`
      });

      processed++;
      console.log(`✅ ${basename(filePath)} → ${savings.toFixed(0)}KB saved (${savingsPercent}%)`);

    } catch (e) {
      console.error(`❌ Error processing ${filePath}: ${e.message}`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`\n   Processed: ${processed} images`);
  console.log(`   Skipped: ${skipped} images (< 50KB)`);
  console.log(`\n   Original total: ${(totalOriginalSize / 1024).toFixed(2)} MB`);
  console.log(`   Optimized total: ${(totalOptimizedSize / 1024).toFixed(2)} MB`);
  console.log(`   Total savings: ${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(2)} MB`);
  console.log(`   Reduction: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`);

  // Top 10 biggest savings
  console.log('\n📈 TOP 10 BIGGEST SAVINGS:');
  results
    .sort((a, b) => parseFloat(b.savings) - parseFloat(a.savings))
    .slice(0, 10)
    .forEach((r, i) => {
      console.log(`   ${i + 1}. ${r.file}`);
      console.log(`      ${r.originalKB}KB → ${r.webpKB}KB (${r.savingsPercent}% reduction)`);
    });

  // Generate report file
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      processed,
      skipped,
      originalSizeMB: (totalOriginalSize / 1024).toFixed(2),
      optimizedSizeMB: (totalOptimizedSize / 1024).toFixed(2),
      savingsMB: ((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(2),
      reductionPercent: (((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)
    },
    files: results
  };

  await writeFile('scripts/optimization-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Report saved to: scripts/optimization-report.json');
}

optimizeImages().catch(console.error);
