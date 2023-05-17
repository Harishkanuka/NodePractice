const express = require('express');
const path = require('path');
const port = 9000;
const app = express();

// Set up the EJS for views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
	// console.log(__dirname);
	return res.render('home', {
		title: 'My Contacts List',
		contact_list: contactList,
	});
});
//controller for practice view
app.get('/practice', function (req, res) {
	return res.render('practice', {
		title: 'my EJS Play ground',
	});
});

var contactList = [
	{
		name: 'John',
		phone: '123456687',
	},
	{
		name: 'Smith',
		phone: '123456789',
	},
	{
		name: 'Harish',
		phone: '988748634',
	},
];
app.listen(port, function (err) {
	if (err) {
		console.log('error listening to port ' + err);
	}
	console.log('Yupp!!! Express Server listening on port ' + port);
});
