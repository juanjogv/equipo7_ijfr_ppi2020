const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { port } = require('./config');


//Inicializacion
const server = express();

//Settings
server.set('port', port);

//Middlewares
server.use(morgan('dev'));
server.use(cors())

//Rutas
//server.use(require('./routes/autentication'));
//server.use(require('./routes/posts'));
//server.use(require('./routes/profile'));
//server.use(require('./routes/scanner'));
//server.use(require('./routes/ranking'));

server.get("/", (req, res) => {
    res.json({ message: "Welcome." });
});

module.exports = server;
