var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'fradmin',
	password: 'server2012',
	database: 'l34k3d'
});

connection.connect(function(err) {
	if (err) console.log("Failed to connect to database.");
	if (!err) console.log("Sucessfully connected to datase.");
	return;
});

module.exports = connection;