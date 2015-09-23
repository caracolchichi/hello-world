var require_request = require('request');
var request = require_request.post('http://localhost:8099');
process.stdin.pipe(request).pipe(process.stdout);