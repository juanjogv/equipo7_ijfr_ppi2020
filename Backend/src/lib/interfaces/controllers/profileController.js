const { publicacion, escaneo, usuario } = require("../../infrastructure/relationModels");

module.exports = {
  async findProfile(req) {
    const { email_usuario } = req.body;

    const { id_usuario } = await usuario.findOne({ where: { email_usuario } });

    return await usuario.findOne({
      attributes: ["nombre_usuario", "apellido_usuario", "foto_usuario", "escaneos_usuario"],
      where: { email_usuario },
      include: {
        model: publicacion,
        where: { id_usuario },
        as: "publicacions",
      },
    });
  },
};
