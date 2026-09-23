const fs = require('fs');

const html = fs.readFileSync('scratch_drive.html', 'utf8');

// Search for the JSON-like chunks in Drive bootstrap data
// Let's find patterns where filename and drive ID are close to each other
const files = [];

// In Google Drive HTML, files are often represented in nested arrays like:
// ["1WL9Nhuh_WD8QiP6BJh8IP4duekPxXqt2","air purifier.mp4", ... or [["1WL9Nhuh...", ... "air purifier.mp4"
// Let's search around each filename
const mediaFiles = [
  '1.mp4',
  '2.mp4',
  '2n1.mp4',
  '3d quantum lift.mp4',
  '4TH VIDEO..mp4',
  '4th video.mp4',
  '4th.mp4',
  '5.mp4',
  '8d7cb32915e22b342e71d32dcf6ba25f_0_91233333.mp4',
  '0315(1).mp4',
  '0328.mp4',
  '0406 (2).mp4',
  '0415.mp4',
  '0503 (2).mp4',
  '0503 (2)(1).mp4',
  '0517.mp4',
  '0602.mp4',
  '0619(2).mp4',
  '0619(3).mp4',
  '0705.mp4',
  '0810.mp4',
  '0812.mp4',
  'ADP FINALE.mp4',
  'ADP.mp4',
  'air purifier.mp4',
  'aivs.mp4',
  'DEMO FOR NANObrush.mp4',
  'demo video chris.mp4',
  'dental latest.mp4',
  'DUNNAMIS F.mp4',
  'e9440d797eaeae1ce19adc4126189ab5_0_57133333.mp4',
  'FIT4.mp4',
  'fitness band.mp4',
  'FOCUSfLOW.mp4',
  'gig video-Cover.jpg',
  'gig video.mp4',
  'Glow Genie 7 Real.mp4',
  'packing cubes 2nd draft.mp4',
  'RAFFaELLA update.mp4'
];

for (const name of mediaFiles) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Find index of this name in html
  let pos = 0;
  while ((pos = html.indexOf(name, pos)) !== -1) {
    // Look in a window of 500 chars before and after
    const windowStart = Math.max(0, pos - 400);
    const windowEnd = Math.min(html.length, pos + 400);
    const slice = html.substring(windowStart, windowEnd);
    
    // Find drive IDs (typically 33 chars alphanumeric with - and _)
    const idRegex = /"([a-zA-Z0-9_-]{33})"/g;
    let m;
    while ((m = idRegex.exec(slice)) !== null) {
      if (m[1] !== '1ZO2cKj6HMatx_3pe5oZ1Tp5eUamUjKus') { // ignore folder ID
        files.push({ name, id: m[1], snippet: slice.substring(0, 100) });
      }
    }
    pos += name.length;
  }
}

// Deduplicate
const uniqueMap = new Map();
for (const f of files) {
  if (!uniqueMap.has(f.name)) {
    uniqueMap.set(f.name, f.id);
  }
}

const result = Array.from(uniqueMap.entries()).map(([name, id]) => ({ name, id }));
console.log(`Found ${result.length} unique file mappings:`);
console.log(JSON.stringify(result, null, 2));

fs.writeFileSync('mapped_drive_files.json', JSON.stringify(result, null, 2));

