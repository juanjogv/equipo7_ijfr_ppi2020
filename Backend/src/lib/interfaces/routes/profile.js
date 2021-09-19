const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.post("/profile/posts", async (req, res) => {
  const posts = await profileController.findPosts(req);
  res.json(posts);
});

router.post("/profile/escaneos", async (req, res) => {
  const escaneos = await profileController.findEscaneos(req);
  res.json(escaneos);
});

router.post("/profile/foto", async (req, res) => {
  const foto = await profileController.findFoto(req);
  res.json(foto);
});

module.exports = router;
