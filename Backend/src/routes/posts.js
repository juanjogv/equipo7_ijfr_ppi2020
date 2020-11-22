const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get("/posts", async (req, res) => {
    const rows = await connection.query('SELECT * FROM publicacion');
    res.json(rows)
});

module.exports = router;