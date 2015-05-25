var express = require('express');
var app = express();
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render('index');
});

console.log('Server starting on port 8080...');
app.listen(8080);
