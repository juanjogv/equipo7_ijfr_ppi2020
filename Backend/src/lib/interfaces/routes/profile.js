const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.post("/profile", async (req, res) => {
  const posts = await profileController.findProfile(req);
  res.json(posts);
});

module.exports = router;
