var db = require('./mysql_conn.js');

exports.get_all = function(req, res) {
	db.query("SELECT fname, lname, bar_id, State FROM users LIMIT 20", function(err, itm) {
		if (err) throw err;
		res.send(itm);
	});
}

exports.get_by_fname = function(req, res) {
	var name = req.params.fname;
	db.query("SELECT lname, bar_id, State FROM users WHERE fname = ? LIMIT 10", [name], function(err, itm) {
		if (err) throw err;
		res.send(itm);
	});
}

exports.get_by_lname = function(req, res) {
	var name = req.params.lname;
	db.query("SELECT fname, bar_id, State FROM users WHERE lname = ? LIMIT 10", [name], function(err, itm) {
		if (err) throw err;
		res.send(itm);
	});
}