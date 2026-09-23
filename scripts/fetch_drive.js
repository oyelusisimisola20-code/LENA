const fs = require('fs');

async function main() {
  const folderId = '1ZO2cKj6HMatx_3pe5oZ1Tp5eUamUjKus';
  const url = `https://drive.google.com/drive/folders/${folderId}`;
  
  console.log(`Fetching folder page: ${url}`);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  
  const text = await res.text();
  fs.writeFileSync('scratch_drive.html', text);
  console.log('Saved scratch_drive.html, length:', text.length);
}

main().catch(console.error);

