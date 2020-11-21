const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get("/", (req, res) => {
    const sql = 'SELECT * FROM usuario';

    connection.query(sql, (error, results) => {

        if (error) throw error;
        if (results.length > 0) {

            res.json(results);

        } else {

            res.send('No hay resultados')

        }

    });
});

router.post("/signin", async (req, res) => {
    const { nombre_usuario, contrasena_usuario, apellido_usuario, email_usuario } = req.body
    const newUser = {
        nombre_usuario,
        contrasena_usuario,
        apellido_usuario,
        email_usuario
    }
    const rows = await connection.query('SELECT * FROM usuario where email_usuario = ?', email_usuario);

    if (rows.length > 0) {
        res.json({ boolean: false });
    } else {
        await connection.query('INSERT INTO usuario set ?', [newUser]);
        res.json({ boolean: true });
    }
});


module.exports = router;