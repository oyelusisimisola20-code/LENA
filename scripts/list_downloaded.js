const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync('downloaded_videos_manifest.json', 'utf8'));

console.log(`Total downloaded items: ${manifest.length}`);
console.log(manifest.map(m => ({ name: m.name, path: m.path, sizeMB: (m.size / (1024*1024)).toFixed(1) })));

