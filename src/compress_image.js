const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/screencapture-localhost-3001-2026-07-15-20_31_39.png');
const outputPath = path.join(__dirname, '../public/images/screencapture-localhost-3001-2026-07-15-20_31_39.webp');

console.log('Starting compression of 13MB image...');

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(info => {
    console.log('Compression successful!');
    console.log('Output Info:', info);
  })
  .catch(err => {
    console.error('Error during compression:', err);
  });
