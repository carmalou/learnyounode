var fs = require('fs');
var path = require('path');

module.exports = function getExtName(dirName, ext, callback) {
  var result = [];
  fs.readdir(dirName, function(err, files) {
    if(err) {
      console.log(err);
      return callback(err);
    } else {
      for(i = 0; i < files.length; i++) {
        if(path.extname(files[i]) == '.' + ext) {
          result.push(files[i]);
        }
      }
      return callback(null, result);
    }
  });
};
