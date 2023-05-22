const express = require('express');
const path = require('path');
const port = 9000;

//connecting database and express server
const db = require('./config/mongoose.js');

const app = express();

// Set up the EJS for views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Creating a middleware to handle encoding for that we are using parser which is express inbuit funtion
app.use(express.urlencoded()); //This will encode data in object format

//Creating a middleware for Static files
app.use(express.static('assets'));
/* 
//Setting up our own middlewares
//MiddleWARE 01
app.use(function (req, res, next) {
	console.log('Middleware1 is called');
	next();
});

//Middleware 02
app.use(function (req, res, next) {
	console.log('Middleware2 is called');
	next();
});
*/

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

app.post('/create-contact', function (req, res) {
	//append data into array
	// contactList.push({
	// 	name: req.body.name,
	// 	phone: req.body.phone,
	// });
	// same as above code
	contactList.push(req.body);
	// return res.redirect('/');
	//can also use back instead of url
	return res.redirect('back');
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
//To delete a contact
app.get('/delete-contact/', function (req, res) {
	console.log(req.query);
	let phone = req.query.phone;

	let contactindex = contactList.findIndex(
		(contact) => contact.phone == phone
	);

	if (contactindex != -1) {
		contactList.splice(contactindex, 1);
	}

	return res.redirect('back');
});
