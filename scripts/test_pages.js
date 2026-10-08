const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.join(__dirname, '..');
const htmlFiles = ['login.html', 'index.html', 'product.html', 'cart.html', 'checkout.html'];

console.log('--- Verifying HTML files & Inline Scripts ---');

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: ${file} does not exist!`);
    process.exit(1);
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Extract <script> tags that are not src imports
  const scriptRegex = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let scriptIndex = 1;
  while ((match = scriptRegex.exec(html)) !== null) {
    const code = match[1];
    if (code.trim().length > 0) {
      try {
        new vm.Script(code, { filename: `${file}#script${scriptIndex}` });
        console.log(`✓ ${file} script #${scriptIndex} syntax valid`);
      } catch (err) {
        console.error(`✕ Syntax error in ${file} script #${scriptIndex}:`, err.message);
        process.exit(1);
      }
      scriptIndex++;
    }
  }
});

console.log('All HTML files and inline scripts are syntactically valid!');
