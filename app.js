var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

// middleware: we can log in every single request is made!
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', function(req, res){
    res
        .status(200)
        .json( {"jsonData": true})
});

app.get('/file', function(req, res){
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js') );
});

var server = app.listen(app.get('port'), function(){
    console.log("Magic happens on port " + app.get('port') + "!...");
});

