var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var ext = process.argv[3];
var result = [];
var i;

fs.readdir(filePath, function(err, files) {
  if(err) {
    console.log(err);
  } else {
    for(i = 0; i < files.length; i++) {
      if(path.extname(files[i]) == '.' + ext) {
        result.push(files[i]);
      }
    }
    console.log(result.join('\n'));
  }
});
