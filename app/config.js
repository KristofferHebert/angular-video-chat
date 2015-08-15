module.exports = function(app, handlebars, port, io, server, express) {
    // configure enviroment

    // configure base url
    var baseUrl;

    if (process.env.NODE_ENV === "production") {
        baseUrl = 'http://vc.hirekris.com';
    } else {
        baseUrl = 'http://localhost:' + port;
    }

    // configue templates
    app.use(express.static('public'));
    var hbs = handlebars.create({
        helpers: {
            baseUrl: baseUrl
        }
    });
    app.engine('handlebars', hbs.engine);
    app.set('views', './app/views')
    app.set('view engine', 'handlebars');
    app.enable('view cache');

    // config socket.io
    io.attach(server);

}
