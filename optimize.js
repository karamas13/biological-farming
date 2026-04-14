import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public/photos');
const outputDir = path.join(__dirname, 'public/photos/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  // Check for image extensions
  if (file.match(/\.(jpg|jpeg|png|avif|webp)$/i)) {
    const inputPath = path.join(inputDir, file);
    // This will save them all as .avif in the optimized folder
    const outputPath = path.join(outputDir, file.replace(/\.[^.]+$/, '.avif'));

    sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true }) // Caps width at 1200px
      .avif({ quality: 50 }) // The "Lighthouse-approved" compression
      .toFile(outputPath)
      .then(() => console.log(`✅ Optimized: ${file}`))
      .catch(err => console.error(`❌ Error processing ${file}:`, err));
  }
});