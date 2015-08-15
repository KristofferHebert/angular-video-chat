// require modules
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var handlebars = require('express-handlebars');
var port = process.env.PORT || 3000;

// configure server and views
require('./app/config')(app, handlebars, port, io, server, express);

// configure routes
require('./app/routes')(app);

// configure sockets
require('./app/sockets')(io);

console.log('Server listening on  ' + port);

server.listen(port);