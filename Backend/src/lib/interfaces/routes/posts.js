const router = require("express").Router();
const postController = require("../controllers/postController");

router.get("/posts", async (req, res) => {
  const posts = await postController.getPosts();
  res.json(posts);
});

module.exports = router;
