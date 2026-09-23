const fs = require('fs');

async function testLarge() {
  const id = '1v0NgU56tXwS_BaGBPpGZBMyqvRb7Xt6D';
  const url1 = `https://drive.google.com/uc?export=download&id=${id}`;
  const res1 = await fetch(url1);
  const html = await res1.text();
  
  const uuidMatch = html.match(/name="uuid" value="([^"]+)"/);
  const confirmMatch = html.match(/name="confirm" value="([^"]+)"/);
  
  const uuid = uuidMatch ? uuidMatch[1] : '';
  const confirm = confirmMatch ? confirmMatch[1] : 't';
  
  const downloadUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${confirm}&uuid=${uuid}`;
  console.log('Download URL:', downloadUrl);
  
  const res2 = await fetch(downloadUrl);
  console.log('Status:', res2.status, 'Type:', res2.headers.get('content-type'), 'Length:', res2.headers.get('content-length'));
  
  const buffer = Buffer.from(await res2.arrayBuffer());
  console.log('Downloaded size:', buffer.length);
  fs.writeFileSync('public/videos/8d7cb32915e22b342e71d32dcf6ba25f_0_91233333.mp4', buffer);
  console.log('Successfully saved large video!');
}

testLarge().catch(console.error);

