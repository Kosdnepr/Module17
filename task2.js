var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/myapp/public'));

app.get('/', function(req, res) {
	res.send('index.html');
	console.log(res);
});

app.get('/specifications', function(req, res) {
	res.send('specifications.html');
});

app.get('/about', function(req, res) {
	res.send('about.html');
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});