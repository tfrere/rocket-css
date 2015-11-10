var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var mcapi = require('./node_modules/mailchimp-api/mailchimp');
var mc = new mcapi.Mailchimp('63ecaf49616d482e4168575b8b0fe6df-us11');

var express = require('express');
var app = express();

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.use('/', express.static('dist'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/subscribeToMailchimp', function(req,res){
	console.log(req.body);
	mc.lists.subscribe({id:'df4f718a60', email:{email:req.body.email}},
	function(data) {
		return res.send(200);
	},
	function(error) {
		console.log(error);
		return res.send(404, error.code);
	});
});

app.post('/sendQuestion', function(req,res){
	console.log(req.body);
	if (req.body.email && req.body.name && req.body.content)
		return res.send(200);
	else
		return res.send(404, error.code);
});
