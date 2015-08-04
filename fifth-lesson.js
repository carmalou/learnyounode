var fs = require('fs');
var filePath = process.argv[2];

fs.readdir(filePath, function(err, files) {
  if(err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
