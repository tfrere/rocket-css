var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var mcapi = require('./node_modules/mailchimp-api/mailchimp');
var mc = new mcapi.Mailchimp('63ecaf49616d482e4168575b8b0fe6df-us11');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
app.use(cors());

// Here we require the prerender middleware that will handle requests from Search Engine crawlers 
// We set the token only if we're using the Prerender.io service 
app.use(require('prerender-node').set('prerenderToken', 'ds8ZK1oQ3gDwsQTAKQ56')); 
app.use('/', express.static(__dirname + '/dist/'));
app.use('/', express.static(__dirname + '/sitemap/'));
app.use("/vendor", express.static(__dirname + "/dist/vendor"));
app.use("/scripts", express.static(__dirname + "/dist/scripts"));
app.use("/ressources", express.static(__dirname + "/dist/ressources"));
app.use("/assets", express.static(__dirname + "/dist/assets"));
app.use("/styles", express.static(__dirname + "/dist/styles"));
app.use("/templates", express.static(__dirname + "/dist/templates"));

// app.all("/*", function(req, res, next) {
//     res.sendfile("index.html", { root: __dirname + "/dist" });
// });

// send our main angular html file if any link without dot is requested, e.g. 'http://someurl/about'
// this is our actual server side redirect, we don't send index.html when there's dot in link assuming such a request
// is for static data like .js, .css or .html
app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
    	.sendfile("index.html", { root: __dirname + "/dist" });
});


// FORMS ROUTES

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

// SAY HELLO

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
