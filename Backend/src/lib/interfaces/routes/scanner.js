const router = require("express").Router();
const scannerController = require("../controllers/scannerController");

router.put("/scanner", async (req, res) => {
  const escaneos = scannerController.setEscaneos(req);
  res.send(escaneos);
});

module.exports = router;
