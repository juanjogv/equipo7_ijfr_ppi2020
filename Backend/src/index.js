const express = require('express');
const bodyParser = require("body-parser")
var cors = require('cors')


//Inicializacion
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(bodyParser.json());
app.use(cors())
require('dotenv').config()

//Rutas
app.use(require('./routes/autentication'));


//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})
