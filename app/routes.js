var shortid = require('shortid');

module.exports = function routesWrapper(app) {

    function getHomepage(req, res) {
        res.render('index', {
            id: shortid.generate(),
            layout: false
        });

    }

    function getRoom(req, res) {
        var room = req.params['room'];
        if (!room) {
            res.redirect('/');
        }
        res.render('room', {room:room});
    }

    app.get('/', getHomepage);
    app.get('/:room?', getRoom);
}
