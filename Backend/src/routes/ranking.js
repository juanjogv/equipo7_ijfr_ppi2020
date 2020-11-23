const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get("/ranking", async (req, res) => {
    const rows = await connection.query('SELECT * FROM usuario ORDER BY escaneos_usuario desc');
    res.json(rows)
});

module.exports = router;