const express = require('express');
const port = 9000;
const app = express();

app.get('/', function (req, res) {
	res.send('<h1>WELCOME!! Home</h1>');
});
app.listen(port, function (err) {
	if (err) {
		console.log('error listening to port ' + err);
	}
	console.log('Yupp!!! Express Server listening on port ' + port);
});
