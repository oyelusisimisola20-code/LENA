const fs = require('fs');

const html = fs.readFileSync('scratch_drive.html', 'utf8');

// Look for data structures in Drive's bootstrap data or scripts
// Google Drive typically embeds initial data in _DRIVE_BOOTSTRAP_DATA or similar window variables or JSON-like arrays
const fileMatches = [];

// Regular expression to find file names and IDs (.mp4, .mov, etc.)
const re = /\["([a-zA-Z0-9_-]{25,})",\["([^"]+\.(?:mp4|mov|webm|mkv|avi|jpg|png|webp))"/gi;
let match;
while ((match = re.exec(html)) !== null) {
  fileMatches.push({ id: match[1], name: match[2] });
}

console.log('Regex 1 matches found:', fileMatches.length);

// Let's also do a broader search for filenames and IDs
const nameRegex = /"([^"\\]+\.(?:mp4|mov|webm|mkv|avi|png|jpg|jpeg))"/gi;
const allNames = new Set();
let nMatch;
while ((nMatch = nameRegex.exec(html)) !== null) {
  allNames.add(nMatch[1]);
}
console.log('All media filenames found:', Array.from(allNames));

// Search for any 33-char drive IDs
const driveIdRegex = /"([a-zA-Z0-9_-]{33})"/g;
const allIds = new Set();
let idMatch;
while ((idMatch = driveIdRegex.exec(html)) !== null) {
  allIds.add(idMatch[1]);
}
console.log('Drive IDs count:', allIds.size);
console.log('Sample drive IDs:', Array.from(allIds).slice(0, 10));

// Let's dump extracted JSON or structure info
fs.writeFileSync('extracted_files.json', JSON.stringify({
  fileMatches,
  allNames: Array.from(allNames),
  sampleIds: Array.from(allIds)
}, null, 2));

