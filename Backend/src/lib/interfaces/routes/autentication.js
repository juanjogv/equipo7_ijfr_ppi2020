const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

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

router.post('/login', async (req, res) => {
    const { email, userpass } = req.body;
    const test = await authController.login(email, userpass);
    res.json(test);
})


module.exports = router;