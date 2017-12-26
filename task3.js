var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('views', './tsk3_views');
app.set('view engine', 'pug');

var exchange = [
	{
    	name: 'USD',
    	buy: 27.80000,
    	sale: 28.10000
	},
	{
    	name: 'EUR',
    	buy: 32.90000,
    	sale: 33.30000
	},
	{
    	name: 'RUR',
    	buy: 0.46500,
    	sale: 0.49000
	},
	{
    	name: 'BTC',
    	buy: 13266.0601,
    	sale: 14662.4875
	}
]

app.get('/', function(req, res) {
	res.send('Add the currency in URL: /EUR /RUR /USD /BTC');
});

app.get('/:name', function(req, res) {
	var currency = exchange.find(function(currency) {
		return currency.name === req.params.name;
	});
	res.render('index', { title: currency.name, currencyname: currency.name, buy: currency.buy, sale: currency.sale});
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});