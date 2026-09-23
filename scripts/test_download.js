const fs = require('fs');
const path = require('path');

async function testDownload(fileId, fileName) {
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  console.log(`Downloading ${fileName} from ${url}...`);
  
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });

  console.log('Status:', res.status, 'Content-Type:', res.headers.get('content-type'), 'Content-Length:', res.headers.get('content-length'));
  
  // If Google Drive shows virus scan warning for large files, it returns an HTML page with a confirm token
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('text/html')) {
    const html = await res.text();
    console.log('Got HTML, looking for confirm link...');
    const confirmMatch = html.match(/href="(\/uc\?export=download[^"]+)"/) || html.match(/confirm=([0-9a-zA-Z_-]+)/);
    console.log('Confirm match:', confirmMatch ? confirmMatch[0] : 'None');
  } else {
    const buffer = Buffer.from(await res.arrayBuffer());
    console.log(`Successfully downloaded binary: ${buffer.length} bytes`);
  }
}

testDownload('1nwNZ7nkJlUapdz7rCu78ZeEU0zjOzCfc', 'air purifier.mp4').catch(console.error);

