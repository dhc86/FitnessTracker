var express = require('express');
var app = express();

app.set('port', 3000);

var server = app.listen(app.get('port'), function(){
    console.log("Magic happens on port " + app.get('port') + "!...");
});

