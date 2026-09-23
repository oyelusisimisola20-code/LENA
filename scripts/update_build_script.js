const fs = require('fs');
let code = fs.readFileSync('scripts/build_full_portfolio.js', 'utf8');
code = code.replace(/thumbnail:\s*"[^"]+"/g, (match, offset, str) => {
  const before = str.slice(Math.max(0, offset - 100), offset);
  const idMatch = before.match(/id:\s*"(project-\d+)"/);
  if (idMatch) {
    return `thumbnail: "/thumbnails/${idMatch[1]}.jpg"`;
  }
  return match;
});
fs.writeFileSync('scripts/build_full_portfolio.js', code);
console.log('Updated scripts/build_full_portfolio.js with /thumbnails paths');
