var require_trumpet = require('trumpet');
var require_through = require('through2');
var transform = require_trumpet();

var var_loud = transform.select('.loud').createStream();
var_loud.pipe(require_through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(var_loud);

process.stdin.pipe(transform).pipe(process.stdout);