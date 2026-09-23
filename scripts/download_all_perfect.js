const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'videos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mappedFiles = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'mapped_drive_files.json'), 'utf8'));

async function downloadDriveFile(item) {
  const cleanName = item.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const destPath = path.join(targetDir, cleanName);

  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100000) {
    console.log(`[EXISTS] ${cleanName} (${fs.statSync(destPath).size} bytes)`);
    return { name: item.name, cleanName, path: `/videos/${cleanName}`, size: fs.statSync(destPath).size, id: item.id };
  }

  console.log(`[START] Fetching ${cleanName} (ID: ${item.id})...`);
  
  // Step 1: Request from drive.google.com
  let initialUrl = `https://drive.google.com/uc?export=download&id=${item.id}`;
  let res1 = await fetch(initialUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });

  let contentType = res1.headers.get('content-type') || '';
  
  if (contentType.includes('text/html')) {
    const html = await res1.text();
    const uuidMatch = html.match(/name="uuid" value="([^"]+)"/);
    const confirmMatch = html.match(/name="confirm" value="([^"]+)"/);
    
    const uuid = uuidMatch ? uuidMatch[1] : '';
    const confirm = confirmMatch ? confirmMatch[1] : 't';
    
    let downloadUrl = `https://drive.usercontent.google.com/download?id=${item.id}&export=download&confirm=${confirm}`;
    if (uuid) downloadUrl += `&uuid=${uuid}`;
    
    console.log(`[DOWNLOADING LARGE] ${cleanName}...`);
    const res2 = await fetch(downloadUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!res2.ok) {
      throw new Error(`HTTP ${res2.status} ${res2.statusText}`);
    }

    const buffer = Buffer.from(await res2.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    console.log(`[DONE] Saved ${cleanName} (${buffer.length} bytes)`);
    return { name: item.name, cleanName, path: `/videos/${cleanName}`, size: buffer.length, id: item.id };
  } else {
    const buffer = Buffer.from(await res1.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    console.log(`[DONE] Saved ${cleanName} (${buffer.length} bytes)`);
    return { name: item.name, cleanName, path: `/videos/${cleanName}`, size: buffer.length, id: item.id };
  }
}

async function run() {
  console.log(`=== DOWNLOADING ALL ${mappedFiles.length} VIDEOS FROM GOOGLE DRIVE ===`);
  const manifest = [];
  
  for (let i = 0; i < mappedFiles.length; i++) {
    const item = mappedFiles[i];
    console.log(`\n[${i + 1}/${mappedFiles.length}] Processing ${item.name}...`);
    try {
      const res = await downloadDriveFile(item);
      if (res) manifest.push(res);
    } catch (err) {
      console.error(`[ERROR] Failed ${item.name}: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'downloaded_videos_manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\n=== COMPLETED! ${manifest.length}/${mappedFiles.length} FILES DOWNLOADED ===`);
}

run().catch(console.error);

