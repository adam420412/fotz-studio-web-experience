#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts images to WebP format and optimizes existing images
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { existsSync } from 'fs';

// Note: This script requires sharp to be installed
// Run: npm install sharp

async function* walkDir(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const path = join(dir, file.name);
    if (file.isDirectory()) {
      yield* walkDir(path);
    } else {
      yield path;
    }
  }
}

async function optimizeImages() {
  const sharp = (await import('sharp')).default;
  
  const srcDir = 'src/assets';
  const publicDir = 'public';
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  
  const dirsToProcess = [srcDir, publicDir];
  let processed = 0;
  let skipped = 0;
  let totalSaved = 0;

  console.log('🖼️  Starting image optimization...\n');

  for (const baseDir of dirsToProcess) {
    if (!existsSync(baseDir)) continue;
    
    for await (const filePath of walkDir(baseDir)) {
      const ext = extname(filePath).toLowerCase();
      
      if (!imageExtensions.includes(ext)) continue;
      
      const webpPath = filePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
      
      // Skip if WebP already exists and is newer
      if (existsSync(webpPath)) {
        const originalStat = await stat(filePath);
        const webpStat = await stat(webpPath);
        
        if (webpStat.mtime > originalStat.mtime) {
          skipped++;
          continue;
        }
      }

      try {
        const originalStat = await stat(filePath);
        const originalSize = originalStat.size;
        
        // Convert to WebP
        await sharp(filePath)
          .webp({ quality: 80, effort: 4 })
          .toFile(webpPath);
        
        const webpStat = await stat(webpPath);
        const webpSize = webpStat.size;
        const saved = originalSize - webpSize;
        const savedPercent = ((saved / originalSize) * 100).toFixed(1);
        
        totalSaved += saved;
        processed++;
        
        console.log(`✅ ${basename(filePath)} → ${basename(webpPath)} (saved ${savedPercent}%)`);
      } catch (error) {
        console.error(`❌ Failed to process ${filePath}:`, error.message);
      }
    }
  }

  console.log('\n📊 Summary:');
  console.log(`   Processed: ${processed} images`);
  console.log(`   Skipped: ${skipped} images (already up to date)`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages().catch(console.error);
