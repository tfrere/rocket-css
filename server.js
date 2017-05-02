var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
app.use(cors());

app.use(express.static('dist'));
// send our main angular html file if any link without dot is requested, e.g. 'http://someurl/about'
// this is our actual server side redirect, we don't send index.html when there's dot in link assuming such a request
// is for static data like .js, .css or .html
app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html')
    	.sendfile("index.html", { root: __dirname + "/dist" });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
