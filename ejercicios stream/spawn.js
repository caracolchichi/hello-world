var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
  var join = spawn(cmd, args);
  return duplexer(join.stdin, join.stdout);
};