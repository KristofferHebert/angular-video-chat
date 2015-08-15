var streams = [];
module.exports = function socketWrapper(io) {
    io.sockets.on('connection', function connectionWrapper(socket) {
        console.log(socket.id, ' connected');

        function joinRoom(room){
            socket.room = room;
            socket.join(room);
            console.log(socket.id + " joined " + room);
        };

        function leaveRoom(room){
            socket.leave(socket.room);
            console.log(socket.id + " left " + socket.room);
        };

        socket.on('joinroom', joinRoom);
        socket.on('leaveroom', leaveRoom);

    });
};
