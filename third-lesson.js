var fs = require('fs');

var contents = fs.readFileSync(process.argv[2], 'utf-8');

contents = contents.split('\n');
console.log(contents.length - 1);
