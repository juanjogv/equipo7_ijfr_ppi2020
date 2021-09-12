const router = require("express").Router();
const rankingController = require("../controllers/rankingController");

router.get("/ranking", async (req, res) => {
  const ranking = await rankingController.getRanking();
  res.json(ranking);
});

module.exports = router;
