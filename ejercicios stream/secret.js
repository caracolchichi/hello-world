var req_crypto = require('crypto');
var req_tar = require('tar');
var req_zlib = require('zlib');
var req_concat = require('concat-stream');

var parser = req_tar.Parse();
parser.on('entry', function (e) {
  if (e.type !== 'File') return;
  
  var x = req_crypto.createHash('md5', { encoding: 'hex' });
  e.pipe(x).pipe(req_concat(function (hash) {
      console.log(hash + ' ' + e.path);
  }));
});

var code = process.argv[2];
var pw = process.argv[3];
process.stdin
  .pipe(req_crypto.createDecipher(code, pw))
  .pipe(req_zlib.createGunzip())
  .pipe(parser)
;