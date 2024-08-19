module.exports = io => {
  io.on('connection', socket => {

    console.log('new socket connected');

    socket.on('userCoordinates', (coords) => {
      console.log(coords);
      // b'>RTT190824132028-3467803-05837124000125300DF2102 04040004 000 00000000230000000392;ID=7471;#0181;*5D<\r\n'
      socket.broadcast.emit('newUserCoordinates', coords);
    });
  });
};