var express = require('express');
var app = express();
var http = require('http');
var express = require('express');
var app = express();


app.use('/', express.static(__dirname + '/build/'));

app.all("/*", function(req, res, next) {
    res.sendfile("index.html", { root: __dirname + "/build" });
});

// SAY HELLO

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
