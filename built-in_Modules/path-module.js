const path = require('path');

console.log(path.sep);

const filePath = path.join('/PathTest', 'subFolder', 'text.txt');
console.log(filePath);

console.log(require(filePath));
