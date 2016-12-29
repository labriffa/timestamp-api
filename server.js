var express = require("express");
var timestamp = require('unix-timestamp');
var app = express();

app.get('/:date', function(req, res){
    var date = req.params.date;
    var unix = timestamp.fromDate(date);
    
    if(isNaN(unix)) {
        unix = null;     
        date = null;
    }
    
    var jsonDate = {
        'unix': unix,
        'natural': date
    }
    res.end(JSON.stringify(jsonDate));
});

app.listen(8080);