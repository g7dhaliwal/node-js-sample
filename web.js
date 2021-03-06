var fs = require('fs');
var express = require('express');
var app = express();
//fs.readFileSync('index.html');

var data = '';
var filename = "index.html";
fs.exists(filename,function(exists){
	if(exists){
		fs.stat(filename,function(error,stats){
			fs.open(filename, "r", function(error, fd){
				var buffer = new Buffer(stats.size);
				fs.read(fd,buffer,0,buffer.length,null,function(error,bytesRead,buffer){
					data = data + (buffer.toString("utf8",0,buffer.length));
					console.log(data);
					fs.close(fd);
					});
				});
			});
		}
	});


app.use(express.logger());
app.get('/', function(request, response) {
 // var out = fs.buffer;
  //out.toString('utf-8');
  response.write(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
