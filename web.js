var fs = require('fs');
var express = require('express');
var app = express();
fs.readfile('./Index.html');
app.use(express.logger());

app.get('/', function(request, response) {
  var out = fs.buffer.toString('utf-8');
  response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
