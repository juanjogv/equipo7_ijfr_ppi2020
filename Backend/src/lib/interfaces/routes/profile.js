const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get("/posts/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params
    const rows = await connection.query('SELECT * FROM publicacion WHERE id_usuario = ?', id_usuario);
    res.json(rows)
});

router.get("/escaneos/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params
    const rows = await connection.query('SELECT escaneos_usuario FROM usuario WHERE id_usuario = ?', id_usuario);
    res.json(rows)
});

router.get("/foto/:id_usuario", async (req, res) => {
    const { id_usuario } = req.params
    const rows = await connection.query('SELECT foto_usuario FROM usuario WHERE id_usuario = ?', id_usuario);
    res.json(rows)
});

module.exports = router;