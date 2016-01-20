var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var cors = require('cors');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
app.use(cors());

// Here we require the prerender middleware that will handle requests from Search Engine crawlers 
// We set the token only if we're using the Prerender.io service 
//app.use(require('prerender-node').set('prerenderToken', 'ds8ZK1oQ3gDwsQTAKQ56')); 
app.use('/', express.static(__dirname + '/dist/'));
app.use('/', express.static(__dirname + '/sitemap/'));
app.use("/vendor", express.static(__dirname + "/dist/vendor"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));
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

app.post('/sendForm/', function(req,res){
	console.log(req.body);
	if (req.body.email && req.body.name && req.body.msg)
	{
		var transporter = nodemailer.createTransport({
		        service: 'Gmail',
		        auth: {
		            user: 'frere.thibaud@gmail.com', // Your email id
		            pass: 'IuHW8m74' // Your password
		        }
		    });
		var text = 'Hello world from \n\n' + req.body.name;
		var mailOptions = {
		    from: 'portfolio@tfrere.fr', // sender address
		    to: 'frere.thibaud@gmail.com', // list of receivers
		    subject: '[Incoming demand]', // Subject line
		    html: '<b>Email: </b> ' + req.body.email + '<br/>' +
		    	  '<b>Nom: </b> ' + req.body.name + '<br/>' +
		    	  '<b>Contenu: </b> ' + req.body.email + '<br/>'
		};
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return res.send(404, error.code);
		    }else{
				return res.send(200);
		    };
		});
	}
	else
		return res.send(404, error.code);
});

// SAY HELLO

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
