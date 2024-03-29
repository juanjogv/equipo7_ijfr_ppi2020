const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { port } = require("./config");

//Inicializacion
const server = express();

//Settings
server.set("port", port);

//Middlewares
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

//Rutas
server.use(require("./lib/interfaces/routes/autentication"));
server.use(require("./lib/interfaces/routes/posts"));
server.use(require("./lib/interfaces/routes/profile"));
server.use(require("./lib/interfaces/routes/scanner"));
server.use(require("./lib/interfaces/routes/ranking"));

server.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});

module.exports = server;
