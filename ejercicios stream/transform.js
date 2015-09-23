var through = require('through2');
var transform = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});
process.stdin.pipe(transform).pipe(process.stdout);