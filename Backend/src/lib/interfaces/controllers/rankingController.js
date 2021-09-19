const { usuario } = require("../../infrastructure/relationModels");
module.exports = {
  async getRanking() {
    return await usuario.findAll({
      attributes: ["nombre_usuario", "apellido_usuario", "escaneos_usuario"],
      order: ["escaneos_usuario"],
    });
  },
};
