const mysql = require('mysql');
const { database } = require('./keys')
const { promisify } = require('util');

const connection = mysql.createPool(database);

connection.getConnection((err, connection) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("La conexion con la base de datos fue cerrada");
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexion con la base de datos ha sido rechazada');
        }
    }

    if (connection) connection.release();
    console.log('Base de datos conectada');
    return;
});

//Convertir callbacks en promesas
connection.query = promisify(connection.query)

module.exports = connection;