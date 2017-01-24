var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.use('/', express.static(__dirname + '/dist/'));
//app.use('/', express.static(__dirname + '/app/'));
/*app.use('/', express.static(__dirname + '/sitemap/'));
/*app.use("/vendor", express.static(__dirname + "/dist/vendor"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));
app.use("/scripts", express.static(__dirname + "/dist/scripts"));
app.use("/ressources", express.static(__dirname + "/dist/ressources"));
app.use("/assets", express.static(__dirname + "/dist/assets"));
app.use("/styles", express.static(__dirname + "/dist/styles"));
app.use("/templates", express.static(__dirname + "/dist/templates"));
*/
app.get('/test', function(req,res){
		return res.send(200);
});

app.put('/sendForm', function(req,res){
	console.log(req.body);
	var herv = req.body.test;
	res.status(200).send(herv);
});

//app.use('\/[^\.]+$', express.static(__dirname + '/dist/'));
/*app.get('\/[^\.]+$', function(req, res){
   //res.set('Content-Type', 'text/html')
   //   .sendfile("index.html", { root: __dirname + "/dist" });
   res.send('test');
});*/

var api = express();
api.use(bodyParser.json());
api.put('/api/sendForm', function(req,res){
	console.log(req.body);
	res.status(200).send(req.body);
});

api.listen(4000, function () {
	console.log(4000);
});

// SAY HELLO

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});