var require_through = require('through2');
var require_split = require('split');

var lineas = 0;
var transform = require_through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineas % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineas ++;
    next();
});
process.stdin
    .pipe(require_split())
    .pipe(transform)
    .pipe(process.stdout)
;