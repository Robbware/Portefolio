var express = require('express')
var app = express();
var path = require('path');



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
    console.log("New connection found.");
})

app.use(express.static(path.join(__dirname, 'public/')));
app.listen(80, function() {
    console.log("Listening to server on port 80");
});