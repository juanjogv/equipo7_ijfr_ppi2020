const { usuario } = require("../../infrastructure/relationModels");

module.exports = {
  async setEscaneos(req) {
    const { id_usuario } = req.body;
    return await usuario.increment("escaneos_usuario", {
      where: { id_usuario },
    });
  },
};
