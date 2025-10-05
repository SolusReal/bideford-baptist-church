const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get all .pug files in the current directory (not subdirectories)
const pugFiles = fs.readdirSync('.')
  .filter(file => file.endsWith('.pug') && fs.statSync(file).isFile())
  .join(' ');

if (pugFiles) {
  console.log(`Compiling: ${pugFiles}`);
  execSync(`pug ${pugFiles} --out .`, { stdio: 'inherit' });
} else {
  console.log('No .pug files found in root directory');
}