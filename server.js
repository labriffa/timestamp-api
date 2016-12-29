var express = require("express");
var dateconverter = require("./date-converter");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(require("stylus").middleware(__dirname + '/stylus'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(req, res){
   res.render('index');
});

app.get('/:date', function(req, res){
    
    res.writeHead(200, {'content-type': 'application/json'});
    
    var query = req.params.date;
    var unix = null, natural = null;

    // unix timestamp passed.
    if(/^\d+$/.test(query)) {
        unix = query,
        natural = dateconverter.unixToNatural(+query)
    }
    
    // natural date passed.
    if(dateconverter.naturalToUnix(query)) {
        unix = dateconverter.naturalToUnix(query);
        natural = query;
    }
    
    var jsonDate = {
        'unix': unix,
        'natural': natural
    };
    
    res.end(JSON.stringify(jsonDate));
});

app.listen(process.env.PORT||8080);