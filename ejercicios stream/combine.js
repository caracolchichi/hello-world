  var req_combine = require('stream-combiner');
  var req_through = require('through2');
  var req_split = require('split');
  var req_zlib = require('zlib');

  module.exports = function () {
      var agrupador = req_through(write, end);
      var actual;
      
      function write (line, _, next) {
          if (line.length === 0) return next();
          var row = JSON.parse(line);
          
          if (row.type === 'genre') {
              if (actual) {
                  this.push(JSON.stringify(actual) + '\n');
              }
              actual = { name: row.name, books: [] };
          }
          else if (row.type === 'book') {
              actual.books.push(row.name);
          }
          next();
      }
      function end (next) {
          if (actual) {
              this.push(JSON.stringify(actual) + '\n');
          }
          next();
      }
      
      return req_combine(req_split(), agrupador, req_zlib.createGzip());
  };