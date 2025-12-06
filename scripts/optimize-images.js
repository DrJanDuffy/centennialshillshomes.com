#!/usr/bin/env node
/**
 * Image Optimization Script
 * Optimizes images in public/images/ directory for web use
 * 
 * Usage: node scripts/optimize-images.js
 */

import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.error('Error: sharp package not found. Installing...');
  console.error('Please run: pnpm add -D sharp');
  process.exit(1);
}

const IMAGES_DIR = join(process.cwd(), 'public', 'images');
const OPTIMIZED_DIR = join(process.cwd(), 'public', 'images', 'optimized');

// Image optimization settings
const SETTINGS = {
  // Property images
  property: {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 85,
    format: 'webp'
  },
  // Amenity images
  amenity: {
    maxWidth: 1600,
    maxHeight: 1000,
    quality: 85,
    format: 'webp'
  },
  // Logo
  logo: {
    maxWidth: 400,
    maxHeight: 200,
    quality: 90,
    format: 'png'
  },
  // Default
  default: {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 85,
    format: 'webp'
  }
};

// Determine image type from filename
function getImageType(filename) {
  const name = filename.toLowerCase();
  if (name.includes('logo')) return 'logo';
  if (name.includes('property') || name.includes('home') || name.includes('exterior') || name.includes('clubhouse')) return 'property';
  if (name.includes('lounge') || name.includes('pool') || name.includes('fitness') || name.includes('kitchen') || name.includes('patio') || name.includes('court') || name.includes('entrance') || name.includes('guardhouse')) return 'amenity';
  return 'default';
}

// Optimize a single image
async function optimizeImage(filePath, filename) {
  try {
    const stats = await stat(filePath);
    const originalSize = stats.size;
    const ext = extname(filename).toLowerCase();
    const baseName = basename(filename, ext);
    const imageType = getImageType(filename);
    const settings = SETTINGS[imageType] || SETTINGS.default;
    
    console.log(`Optimizing: ${filename} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    let image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if needed
    if (metadata.width > settings.maxWidth || metadata.height > settings.maxHeight) {
      image = image.resize(settings.maxWidth, settings.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply optimization based on format
    if (settings.format === 'webp') {
      image = image.webp({ 
        quality: settings.quality,
        effort: 6 // Higher effort = better compression but slower
      });
    } else if (settings.format === 'png') {
      image = image.png({ 
        quality: settings.quality,
        compressionLevel: 9
      });
    } else {
      image = image.jpeg({ 
        quality: settings.quality,
        mozjpeg: true
      });
    }
    
    // Output path
    const outputExt = settings.format === 'webp' ? '.webp' : ext;
    const outputPath = join(OPTIMIZED_DIR, `${baseName}${outputExt}`);
    
    // Ensure optimized directory exists
    if (!existsSync(OPTIMIZED_DIR)) {
      await mkdir(OPTIMIZED_DIR, { recursive: true });
    }
    
    // Save optimized image
    await image.toFile(outputPath);
    
    const optimizedStats = await stat(outputPath);
    const optimizedSize = optimizedStats.size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    
    console.log(`  ✓ Optimized: ${(optimizedSize / 1024).toFixed(2)} KB (${savings}% reduction)`);
    
    return {
      original: originalSize,
      optimized: optimizedSize,
      savings: savings
    };
  } catch (error) {
    console.error(`  ✗ Error optimizing ${filename}:`, error.message);
    return null;
  }
}

// Main optimization function
async function optimizeImages() {
  try {
    if (!existsSync(IMAGES_DIR)) {
      console.error(`Error: Images directory not found: ${IMAGES_DIR}`);
      process.exit(1);
    }
    
    const files = await readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => {
      const ext = extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });
    
    if (imageFiles.length === 0) {
      console.log('No image files found in public/images/');
      console.log('Please add image files to the directory first.');
      return;
    }
    
    console.log(`Found ${imageFiles.length} image(s) to optimize...\n`);
    
    const results = [];
    for (const file of imageFiles) {
      const filePath = join(IMAGES_DIR, file);
      const result = await optimizeImage(filePath, file);
      if (result) {
        results.push(result);
      }
    }
    
    console.log('\n=== Optimization Summary ===');
    if (results.length > 0) {
      const totalOriginal = results.reduce((sum, r) => sum + r.original, 0);
      const totalOptimized = results.reduce((sum, r) => sum + r.optimized, 0);
      const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
      
      console.log(`Total original size: ${(totalOriginal / 1024).toFixed(2)} KB`);
      console.log(`Total optimized size: ${(totalOptimized / 1024).toFixed(2)} KB`);
      console.log(`Total savings: ${totalSavings}%`);
      console.log(`\nOptimized images saved to: ${OPTIMIZED_DIR}`);
    } else {
      console.log('No images were optimized.');
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run optimization
optimizeImages();

