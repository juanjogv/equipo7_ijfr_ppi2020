const express = require('express');
const router = express.Router();
const connection = require('../database');
const helpers = require('../lib/helpers');

router.get("/", (req, res) => {
    res.send('API funcionando')
});

router.post

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
        newUser.contrasena_usuario = await helpers.encryptPassword(contrasena_usuario);
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

router.get('/login/:email/:userpass', async (req, res) => {
    const { email, userpass } = req.params;
    const rows = await connection.query('SELECT * FROM usuario WHERE email_usuario = ?', email);

    if (rows.length > 0) {

        const savedpass = rows[0].contrasena_usuario;
        const validPass = await helpers.matchPassword(userpass, savedpass);
        rows.push({ validPass: validPass })
        res.json(rows);

    }
})


module.exports = router;