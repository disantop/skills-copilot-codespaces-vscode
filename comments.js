// Create web server application

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	if (req.url == '/comment') {
		if (req.method == 'POST') {
			var body = '';
			req.on('data', function (data) {
				body += data;
			});
			req.on('end', function () {
				fs.appendFile('comments.txt', body + "\n", function (err) {
					if (err) throw err;
					console.log('The comment was appended to file!');
				});
			});
		}
	}
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
}).listen(8080, 'localhost');