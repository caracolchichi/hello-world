 var require_crypto = require('crypto');
  process.stdin
      .pipe(require_crypto.createDecipher('aes256', process.argv[2]))
      .pipe(process.stdout)
  ;