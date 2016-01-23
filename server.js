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

app.use('/', express.static(__dirname + '/build/'));

app.all("/*", function(req, res, next) {
    res.sendfile("index.html", { root: __dirname + "/build" });
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
