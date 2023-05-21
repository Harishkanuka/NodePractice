//Require the library
const mongoose = require('mongoose');
//Connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');
//Acquire the connection (to check if it is successful)
const db = mongoose.connection;

//Error handling
db.on('error', console.error('Connection is not established'));
//Up and running the print the message
db.once('open', function () {
	console.log('Successfully connected to the database');
});
