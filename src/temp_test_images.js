const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = 'C:\\Users\\amin8\\.gemini\\antigravity\\brain\\7a7bfc3e-2a53-4775-93be-9841c6d748eb';

const imagesToDownload = {
  before_curly_1: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=300&q=80',
  before_messy_2: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=300&q=80',
  before_bedhead_3: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=300&q=80',
  styling_hairdryer_face_1: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=300&q=80',
  styling_salon_face_2: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=300&q=80'
};

function downloadImage(url, filename) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(path.join(targetDir, filename));
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename} successfully.`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(targetDir, filename), () => {});
      console.error(`Error downloading ${filename}:`, err);
      resolve();
    });
  });
}

async function run() {
  for (const [key, url] of Object.entries(imagesToDownload)) {
    await downloadImage(url, `${key}.png`);
  }
}

run();
