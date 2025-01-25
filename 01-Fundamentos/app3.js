const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

// const wordCount = content.split(' ').length;
const reactWordCount = content.match(/React/gi ?? []).length;

// console.log('Palabras', wordCount);
console.log('Palabras React', reactWordCount);