var contents;
var fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if(err) {
    console.log(err);
  } else {
    contents = data.split('\n');
    console.log(contents.length - 1);
  }
})
