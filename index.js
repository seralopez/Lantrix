const express  = require('express');
const http     = require('http');
const socketIO = require('socket.io');
const path     = require('path');
const engine   = require('ejs-mate');
const dotenv   = require('dotenv').config();
const app      = express();
const server   = http.Server(app);
const io       = socketIO(server);

const _PUERTO = process.env.puerto;
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// routes
app.use(require('./routes'));

// sockets
require('./sockets')(io);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(_PUERTO, () => {
  console.log('--- Servidor iniciado ', _PUERTO);
});