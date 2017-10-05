var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
    // socket.emit('createMessage', {
    //     from: 'Somchai',
    //     text: 'Yup, that works for me.'
    // });
    socket.emit('client', 'Hi');
    socket.emit('client', 'How are you?');
    socket.emit('client', 'Hi');
    socket.emit('client', 'Hi');
});
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});
// socket.on('newMessage', function (message) {
//     console.log('newMessage', message);
// });
socket.on('client', function (message) {
    console.log('server:', message);
});