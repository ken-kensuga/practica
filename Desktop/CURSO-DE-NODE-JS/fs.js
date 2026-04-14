const fs = require('node:fs');
const stats = fs.statSync('./archivo.txt');

console.log( stats.isFile() );
console.log( stats.isDirectory() );
console.log( stats.isSymbolicLink() );
console.log( stats.isBlockDevice() );
console.log( stats.isCharacterDevice() );
console.log( stats.isFIFO() );
console.log( stats.isSocket() );