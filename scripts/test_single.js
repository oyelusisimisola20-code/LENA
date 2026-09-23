const fs = require('fs');

async function testSingle() {
  const id = '1v0NgU56tXwS_BaGBPpGZBMyqvRb7Xt6D';
  const url = `https://drive.google.com/uc?export=download&id=${id}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  console.log('Status:', res.status, 'Type:', res.headers.get('content-type'));
  const html = await res.text();
  console.log('Length:', html.length);
  fs.writeFileSync('single_debug.html', html);
  console.log('Saved single_debug.html');
}

testSingle().catch(console.error);

