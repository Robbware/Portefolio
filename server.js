var express = require('express')
var app = express();
var path = require('path');

var totalVisitors = 0;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
    totalVisitors += 1;
})

app.get('/visited', function(req, res) {
    res.send("Visited count: " + totalVisitors);
})

app.use(express.static(path.join(__dirname, 'public/')));
app.listen(80, function() {
    console.log("Listening to server on port 80");
});