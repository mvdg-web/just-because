const fs = require('fs');
const path = require('path');

const iconsDir = path.resolve(__dirname, '../src/assets/icons');
const outputFile = path.resolve(__dirname, '../src/app/icons.ts');

const icons = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''));

const content = `export const ICONS = ${JSON.stringify(icons, null, 2)};`;

fs.writeFileSync(outputFile, content);
console.log('Generated icons.ts with', icons.length, 'icons.');
