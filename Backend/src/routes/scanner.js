const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get("/scanner/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params;
    const rows = await connection.query('SELECT escaneos_usuario FROM usuario WHERE id_usuario = ?', id_usuario);
    console.log(rows);
    res.send(rows)
});

router.post("/scanner/ola", async (req, res) => {
    const { id_usuario, num } = req.body;
    console.log(num);
    console.log(id_usuario);
    const rows = await connection.query(`UPDATE usuario SET escaneos_usuario = ${num + 1} WHERE id_usuario = ${id_usuario} `);

    res.send(rows)
});

module.exports = router;