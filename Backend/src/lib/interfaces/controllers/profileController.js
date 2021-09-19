const {
  publicacion,
  escaneo,
  usuario,
} = require("../../infrastructure/relationModels");

module.exports = {
  async findPosts(req) {
    const { id_usuario } = req.body;
    return await publicacion.findAll({
      where: { id_usuario },
    });
  },
  async findEscaneos(req) {
    const { id_usuario } = req.body;
    return await escaneo.findAll({
      where: { id_usuario },
    });
  },
  async findFoto(req) {
    const { id_usuario } = req.body;
    return await usuario.findAll({
      attributes: ["foto_usuario"],
      where: { id_usuario },
    });
  },
};
