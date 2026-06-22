const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = 'C:\\Users\\amin8\\.gemini\\antigravity\\brain\\7a7bfc3e-2a53-4775-93be-9841c6d748eb';

const candidates = {
  before_stressed_frizzy: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=300&q=80',
  before_wild_curly: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?auto=format&fit=crop&w=300&q=80',
  before_frizzy_mess: 'https://images.unsplash.com/photo-1584297125345-0d2cc1439818?auto=format&fit=crop&w=300&q=80',
  styling_brush_face: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80',
  styling_salon_smiling: 'https://images.unsplash.com/photo-1596473442194-9b0dccbf58db?auto=format&fit=crop&w=300&q=80',
  styling_happy_hair: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=300&q=80'
};

function downloadImage(url, filename) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(path.join(targetDir, filename));
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded ${filename} successfully.`);
          resolve(true);
        });
      } else {
        file.close();
        fs.unlink(path.join(targetDir, filename), () => {});
        console.log(`❌ Failed to download ${filename} (status ${res.statusCode}).`);
        resolve(false);
      }
    }).on('error', () => {
      resolve(false);
    });
  });
}

async function run() {
  for (const [key, url] of Object.entries(candidates)) {
    await downloadImage(url, `${key}.png`);
  }
}

run();
