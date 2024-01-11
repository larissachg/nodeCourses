const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');

// const reactWordCount = words.filter( word => word.toLowerCase().includes('react')).length;

const reactWord = content.match(/react/gi ?? []).length;

console.log('Palabras:', words.length);
// console.log('Palabras React:', reactWordCount);
console.log('Palabras React:', reactWord);