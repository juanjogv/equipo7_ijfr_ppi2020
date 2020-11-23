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
app.use(require('./routes/posts'));
app.use(require('./routes/profile'));
app.use(require('./routes/scanner'));
app.use(require('./routes/ranking'));


//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})
