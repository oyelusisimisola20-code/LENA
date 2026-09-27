const fs = require('fs');
const path = require('path');

function getFiles(dir, exts = ['.tsx', '.ts']) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      if (item !== 'node_modules' && item !== '.next') {
        files = files.concat(getFiles(full, exts));
      }
    } else if (exts.includes(path.extname(item))) {
      files.push(full);
    }
  }
  return files;
}

const files = getFiles(path.join(__dirname, '..', 'src'));
console.log(`Auditing ${files.length} source files...\n`);

const hrefs = [];
const buttons = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(path.join(__dirname, '..'), file);

  // Match href="..."
  const hrefMatches = [...content.matchAll(/href=\{?["'`]([^"'`]+)["'`]\}?/g)];
  for (const m of hrefMatches) {
    hrefs.push({ file: rel, href: m[1] });
  }

  // Match <button ...>
  const buttonMatches = [...content.matchAll(/<button\b([^>]*)>/g)];
  for (const m of buttonMatches) {
    const attrs = m[1];
    const hasOnClick = /onClick=/.test(attrs);
    const hasTypeSubmit = /type=["']submit["']/.test(attrs);
    const disabled = /disabled/.test(attrs);
    buttons.push({
      file: rel,
      hasOnClick,
      hasTypeSubmit,
      disabled,
      attrs: attrs.replace(/\s+/g, ' ').trim().slice(0, 80)
    });
  }
}

console.log('--- ALL UNIQUE HREFS IN PROJECT ---');
const uniqueHrefs = [...new Set(hrefs.map(h => h.href))];
for (const u of uniqueHrefs) {
  const filesUsing = hrefs.filter(h => h.href === u).map(h => h.file);
  console.log(`Href: "${u}" (used in: ${[...new Set(filesUsing)].join(', ')})`);
}

console.log('\n--- BUTTONS WITHOUT ONCLICK OR TYPE=SUBMIT ---');
const questionableButtons = buttons.filter(b => !b.hasOnClick && !b.hasTypeSubmit);
if (questionableButtons.length === 0) {
  console.log('None! All buttons have onClick or type="submit".');
} else {
  for (const q of questionableButtons) {
    console.log(`File: ${q.file} | Attrs: ${q.attrs}`);
  }
}
