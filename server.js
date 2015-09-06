var express = require('express'),
	users = require('./routes/users.js');

var app = express();

app.get('/', function(req, res) {
	res.send("Noval API");
});

app.get('/api/v1/users', users.get_all);
app.get('/api/v1/search/f/:fname', users.get_by_fname);
app.get('/api/v1/search/l/:lname', users.get_by_lname);

app.listen(3000);
console.log("API on port 3000");