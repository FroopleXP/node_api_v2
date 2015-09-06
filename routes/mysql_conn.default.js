var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'HOST ADDR.',
	user: 'USERNAME',
	password: 'PASSWORD',
	database: 'DATABASE'
});

connection.connect(function(err) {
	if (err) console.log("Failed to connect to database.");
	if (!err) console.log("Sucessfully connected to datase.");
	return;
});

module.exports = connection;