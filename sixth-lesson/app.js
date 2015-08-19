var mod = require('./sixth-lesson.js');
var filePath = process.argv[2];
var extName = process.argv[3];

mod(filePath, extName, outputToConsole);

function outputToConsole(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data.join('\n'));
  }
}
