// console.log(process.argv)
var i;
var answer = 0;
var args = process.argv.slice(2, process.argv.length);

for(i = 0; i < args.length; i++) {
  args[i] = parseInt(args[i], 10);
}

for(i = 0; i < args.length; i++) {
  answer += args[i];
}
console.log(answer);
