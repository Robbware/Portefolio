var express = require('express')
var app = express();
var path = require('path');
var prompt = require('prompt')

var totalVisitors = 0;

prompt.start();

prompt.get(['online'], function(err, result) {

    console.log("Users that visited: " + totalVisitors)
});


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
    totalVisitors += 1;
})

app.use(express.static(path.join(__dirname, 'public/')));
app.listen(80, function() {
    console.log("Listening to server on port 80");
});