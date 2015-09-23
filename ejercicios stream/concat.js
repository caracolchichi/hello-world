var concatenacion = require('concat-stream');

process.stdin.pipe(concatenacion(function (src) {
  var s = src.toString().split('').reverse().join('');
  console.log(s);
}));