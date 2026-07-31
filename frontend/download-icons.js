import fs from 'fs';
import path from 'path';
import https from 'https';

const API_URL = 'https://api.github.com/repos/umaranis/svelte-lexical/contents/packages/svelte-lexical/static/images/icons';
const DEST_DIR = './static/images/icons';

// Create dest dir if not exists
fs.mkdirSync(DEST_DIR, { recursive: true });

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'node.js' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  try {
    console.log('Fetching icon list from GitHub...');
    const files = await getJson(API_URL);
    if (!Array.isArray(files)) {
      throw new Error('Gagal mengambil daftar file: ' + JSON.stringify(files));
    }
    
    console.log(`Downloading ${files.length} icons...`);
    for (const file of files) {
      if (file.type === 'file' && file.name.endsWith('.svg')) {
        const destPath = path.join(DEST_DIR, file.name);
        await downloadFile(file.download_url, destPath);
        console.log(`Downloaded: ${file.name}`);
      }
    }
    console.log('Semua icon berhasil diunduh ke ' + DEST_DIR);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
