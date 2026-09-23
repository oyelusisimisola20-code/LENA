const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'videos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mappedFiles = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'mapped_drive_files.json'), 'utf8'));

async function downloadFile(item) {
  const cleanName = item.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const filePath = path.join(targetDir, cleanName);

  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 100000) {
    console.log(`[SKIP] ${cleanName} already exists (${fs.statSync(filePath).size} bytes)`);
    return { name: item.name, cleanName, path: `/videos/${cleanName}`, size: fs.statSync(filePath).size };
  }

  let url = `https://drive.google.com/uc?export=download&id=${item.id}`;
  console.log(`[START] Downloading ${cleanName} (ID: ${item.id})...`);

  try {
    let res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    let contentType = res.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      const html = await res.text();
      // Look for confirm token
      const confirmMatch = html.match(/confirm=([0-9a-zA-Z_-]+)/) || html.match(/href="(\/uc\?export=download[^"]+)"/);
      const cookies = res.headers.get('set-cookie') || '';
      
      if (confirmMatch) {
        let confirmUrl = '';
        if (confirmMatch[1].startsWith('/uc?')) {
          confirmUrl = `https://drive.google.com${confirmMatch[1].replace(/&amp;/g, '&')}`;
        } else {
          confirmUrl = `https://drive.google.com/uc?export=download&confirm=${confirmMatch[1]}&id=${item.id}`;
        }
        console.log(`[CONFIRM] Fetching with confirm token: ${confirmUrl}`);
        res = await fetch(confirmUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Cookie': cookies
          }
        });
      }
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log(`[DONE] Saved ${cleanName} (${buffer.length} bytes)`);
    return { name: item.name, cleanName, path: `/videos/${cleanName}`, size: buffer.length };
  } catch (err) {
    console.error(`[ERROR] Failed to download ${item.name}:`, err.message);
    return null;
  }
}

async function run() {
  console.log(`Starting download of ${mappedFiles.length} files from Google Drive...`);
  const results = [];
  
  for (let i = 0; i < mappedFiles.length; i++) {
    const item = mappedFiles[i];
    console.log(`[${i + 1}/${mappedFiles.length}] Processing ${item.name}...`);
    const res = await downloadFile(item);
    if (res) results.push(res);
  }

  fs.writeFileSync(path.join(__dirname, '..', 'downloaded_videos_manifest.json'), JSON.stringify(results, null, 2));
  console.log(`\nFinished! Downloaded ${results.length} files successfully.`);
}

run().catch(console.error);

