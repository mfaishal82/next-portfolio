/**
 * Script untuk mencari dan melaporkan semua Cloudinary images yang belum dioptimasi
 *
 * Usage:
 * node src/scripts/findUnoptimizedImages.js
 */

import fs from 'fs';
import path from 'path';

const CLOUDINARY_REGEX = /https:\/\/res\.cloudinary\.com\/[^'"]+/g;
const OPTIMIZED_REGEX = /f_auto|f_webp/;
const SRC_DIR = 'src';

function findAllFiles(dir, ext = '.js') {
  let files = [];
  const items = fs.readdirSync(dir);

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findAllFiles(fullPath, ext));
    } else if (stat.isFile() && item.endsWith(ext)) {
      files.push(fullPath);
    }
  });

  return files;
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const urls = content.match(CLOUDINARY_REGEX) || [];

  return urls.map(url => ({
    url,
    isOptimized: OPTIMIZED_REGEX.test(url),
    file: filePath
  }));
}

function main() {
  console.log('\n🔍 Scanning project untuk Cloudinary images...\n');

  const files = findAllFiles(SRC_DIR);
  const allImages = [];

  files.forEach(file => {
    const images = scanFile(file);
    allImages.push(...images);
  });

  if (allImages.length === 0) {
    console.log('✅ Tidak ada Cloudinary images ditemukan!');
    return;
  }

  const unoptimized = allImages.filter(img => !img.isOptimized);
  const optimized = allImages.filter(img => img.isOptimized);

  console.log(`📊 Total images: ${allImages.length}`);
  console.log(`✅ Optimized: ${optimized.length}`);
  console.log(`❌ Unoptimized: ${unoptimized.length}\n`);

  if (unoptimized.length > 0) {
    console.log('⚠️  UNOPTIMIZED IMAGES:\n');
    unoptimized.forEach((img, idx) => {
      console.log(`${idx + 1}. File: ${img.file}`);
      console.log(`   URL: ${img.url}\n`);
    });
  }

  if (optimized.length > 0) {
    console.log('\n✅ OPTIMIZED IMAGES:\n');
    optimized.slice(0, 5).forEach((img, idx) => {
      console.log(`${idx + 1}. ${img.url}`);
    });
    if (optimized.length > 5) {
      console.log(`... and ${optimized.length - 5} more`);
    }
  }

  console.log('\n');
}

main();

// Single image
const img = optimizeCloudinaryImage(
  "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1742687064/portfolio/aum9mmy19eqibffdogmr.png",
  { quality: 80 }
);
