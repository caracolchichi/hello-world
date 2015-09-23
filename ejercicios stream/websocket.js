var req_websocket = require('websocket-stream');
var stream = req_websocket('ws://localhost:8099');
stream.write('hello\n');