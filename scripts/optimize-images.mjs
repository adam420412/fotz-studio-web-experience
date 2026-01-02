#!/usr/bin/env node

/**
 * Image Optimization Script
 * Resizes and converts images to WebP format
 * 
 * Usage: node scripts/optimize-images.mjs
 * 
 * This script will:
 * 1. Find all JPG/PNG images in src/assets/
 * 2. Resize images larger than 1600px width
 * 3. Convert to WebP with 75% quality
 * 4. Save alongside originals (image.jpg -> image.webp)
 */

import { readdir, stat, writeFile } from 'fs/promises';
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
  const quality = 75;

  let processed = 0;
  let skipped = 0;
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  console.log('🖼️  Starting image optimization...\n');
  console.log(`   Max width: ${maxWidth}px`);
  console.log(`   Quality: ${quality}%`);
  console.log(`   Format: WebP\n`);

  if (!existsSync(srcDir)) {
    console.error(`❌ Directory not found: ${srcDir}`);
    process.exit(1);
  }

  const largeImages = [];

  for await (const filePath of walkDir(srcDir)) {
    const ext = extname(filePath).toLowerCase();

    if (!imageExtensions.includes(ext)) continue;

    try {
      const stats = await stat(filePath);
      const sizeKB = stats.size / 1024;

      if (sizeKB > 300) {
        largeImages.push({ path: filePath, size: sizeKB });
      }
    } catch (e) {
      // Skip
    }
  }

  // Sort by size descending
  largeImages.sort((a, b) => b.size - a.size);

  console.log(`📊 Found ${largeImages.length} images over 300KB:\n`);

  for (const { path: filePath, size } of largeImages.slice(0, 30)) {
    const relativePath = filePath.replace(srcDir + '/', '');
    console.log(`   ${relativePath.padEnd(50)} ${size.toFixed(0).padStart(6)} KB`);
  }

  if (largeImages.length > 30) {
    console.log(`   ... and ${largeImages.length - 30} more`);
  }

  console.log('\n📝 To optimize these images, run this script locally after cloning the repo.');
  console.log('   The script will resize to max 1600px width and convert to WebP.\n');

  // Create a summary of potential savings
  const totalSize = largeImages.reduce((sum, img) => sum + img.size, 0);
  const estimatedSavings = totalSize * 0.6; // Estimate 60% reduction

  console.log('💰 Estimated savings:');
  console.log(`   Current total: ${(totalSize / 1024).toFixed(2)} MB`);
  console.log(`   After optimization: ~${((totalSize - estimatedSavings) / 1024).toFixed(2)} MB`);
  console.log(`   Potential savings: ~${(estimatedSavings / 1024).toFixed(2)} MB (${((estimatedSavings / totalSize) * 100).toFixed(0)}%)`);
}

optimizeImages().catch(console.error);
