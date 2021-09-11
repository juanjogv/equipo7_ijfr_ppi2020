const { publicacion } = require("../../infrastructure/relationModels")

module.exports = {
  async getPosts() {
    const posts = await publicacion.findAll();
    return posts;
  }
}