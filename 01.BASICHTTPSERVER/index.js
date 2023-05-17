const http = require('http');
//Create a port which will listen to all requests
const port = 8000;

//creating a FS(File System) method which is used to read files on your computer.
const fs = require('fs');
//Creating a RequestHandler to handle all requests
function requestHandler(req, res) {
	console.log(req.url);
	//defining the content type  of the request
	//If the response from the HTTP server is supposed to be displayed as HTML,
	// you should include an HTTP header with the correct content type:
	res.writeHeader(200, { 'content-type': 'text/html' });

	// To handle multiple switch cases

	let filePath;

	switch (req.url) {
		case '/':
			filePath = './index.html';
			break;
		case '/profile':
			filePath = './profile.html';
			break;
		default:
			filePath = './404.html';
			break;
	}

	fs.readFile(filePath, function (err, data) {
		if (err) {
			console.log('ERROR' + err);
			return res.end('<h1>Error</h1>');
		}
		return res.end(data);
	});
	//Reading file contents via FS for single file
	// fs.readFile('./index.html', function (err, data) {
	// 	if (err) {
	// 		console.log('error' + err);
	// 		return res.end('<h1>Error!</h1>');
	// 	}
	// 	return res.end(data);
	// });
	//If the response from the HTTP server is supposed to be rendered as directly without HTML Files
	// res.end('<h1>Gotcha!</h1>');
}
//Create a server and connect to RequestHandler
const server = http.createServer(requestHandler);
//Connecting server to port
server.listen(port, function (err) {
	if (err) {
		console.log('Error listennig server' + err);
		return;
	}
	console.log('Server listening on port' + port);
});
