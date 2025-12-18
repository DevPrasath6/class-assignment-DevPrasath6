const path = require('path');

console.log(__filename);
console.log(__dirname);

const folderPath = path.join(__dirname, 'test', 'file.txt');
console.log(folderPath);

console.log(path.dirname(folderPath));
console.log(path.basename(folderPath));
console.log(path.extname(folderPath));

console.log(path.parse(folderPath));

const parsedPath = {
    root: 'F:\\',
    dir: 'F:\\Dyashin\\Frontend\\Node\\Day 1\\test',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
};

console.log(path.format(parsedPath));
