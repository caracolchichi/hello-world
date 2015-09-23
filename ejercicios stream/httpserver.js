var req_http = require('http');
var req_through = require('through2');

var servidor = req_http.createServer(function (req, res) {
  if (req.method === 'POST') {
      req.pipe(req_through(function (buf, _, next) {
          this.push(buf.toString().toUpperCase());
          next();
      })).pipe(res);
  }
  else res.end('send me a POST\n');
});
servidor.listen(parseInt(process.argv[2]));