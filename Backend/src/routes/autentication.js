const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get("/", (req, res) => {
    res.send('API funcionando')
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
        res.send('false');
    } else {
        await connection.query('INSERT INTO usuario set ?', [newUser]);
    }
});

router.get("/signin/:email", async (req, res) => {
    const { email } = req.params

    const rows = await connection.query('SELECT * FROM usuario WHERE email_usuario = ?', email);

    if (rows.length > 0) {
        res.json({ boolean: false });
    } else {
        res.json({ boolean: true });
    }
});

router.get('/login/:email', async (req, res) => {
    const { email } = req.params;
    res.json(await connection.query('SELECT * FROM usuario WHERE email_usuario = ?', email));
})


module.exports = router;