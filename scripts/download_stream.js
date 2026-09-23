const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(__dirname, '..', 'public', 'videos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const mappedFiles = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'mapped_drive_files.json'), 'utf8'));

function downloadFromGoogleDrive(fileId, destPath) {
  return new Promise((resolve, reject) => {
    const initialUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    function makeRequest(url, cookie = '') {
      https.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Cookie': cookie
        }
      }, (res) => {
        // Handle 301, 302, 303, 307 redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const newCookie = (res.headers['set-cookie'] || []).join('; ') || cookie;
          return makeRequest(res.headers.location, newCookie);
        }

        const contentType = res.headers['content-type'] || '';
        
        // If Google Drive returns HTML confirmation page
        if (contentType.includes('text/html')) {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            const confirmMatch = body.match(/href="(\/uc\?export=download[^"]+)"/) || 
                                 body.match(/confirm=([0-9a-zA-Z_-]+)/) ||
                                 body.match(/name="confirm" value="([^"]+)"/);
            
            const cookies = (res.headers['set-cookie'] || []).join('; ') || cookie;

            if (confirmMatch) {
              let confirmUrl = '';
              if (confirmMatch[1] && confirmMatch[1].startsWith('/uc?')) {
                confirmUrl = `https://drive.google.com${confirmMatch[1].replace(/&amp;/g, '&')}`;
              } else {
                const token = confirmMatch[1] || confirmMatch[0];
                confirmUrl = `https://drive.google.com/uc?export=download&confirm=${token}&id=${fileId}`;
              }
              console.log(`[CONFIRM] Following confirmation url for ID ${fileId}`);
              return makeRequest(confirmUrl, cookies);
            } else {
              // Could not find confirm token
              return reject(new Error('HTML received without confirm token'));
            }
          });
          return;
        }

        // It's binary video stream
        const fileStream = fs.createWriteStream(destPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(fs.statSync(destPath).size);
        });
        fileStream.on('error', (err) => {
          fs.unlink(destPath, () => {});
          reject(err);
        });
      }).on('error', reject);
    }

    makeRequest(initialUrl);
  });
}

async function run() {
  console.log(`Checking and downloading ${mappedFiles.length} files...`);
  const downloaded = [];

  for (let i = 0; i < mappedFiles.length; i++) {
    const item = mappedFiles[i];
    const cleanName = item.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const destPath = path.join(targetDir, cleanName);

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100000) {
      console.log(`[${i+1}/${mappedFiles.length}] [EXISTS] ${cleanName} (${fs.statSync(destPath).size} bytes)`);
      downloaded.push({ name: item.name, cleanName, path: `/videos/${cleanName}`, size: fs.statSync(destPath).size });
      continue;
    }

    console.log(`[${i+1}/${mappedFiles.length}] [DOWNLOADING] ${cleanName} (ID: ${item.id})...`);
    try {
      const size = await downloadFromGoogleDrive(item.id, destPath);
      console.log(`[${i+1}/${mappedFiles.length}] [DONE] ${cleanName} (${size} bytes)`);
      downloaded.push({ name: item.name, cleanName, path: `/videos/${cleanName}`, size });
    } catch (err) {
      console.error(`[${i+1}/${mappedFiles.length}] [FAIL] ${cleanName}: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'downloaded_videos_manifest.json'), JSON.stringify(downloaded, null, 2));
  console.log(`\nCompleted! Total downloaded/verified files: ${downloaded.length}`);
}

run().catch(console.error);

