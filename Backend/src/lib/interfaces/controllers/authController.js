const { usuario } = require("../../infrastructure/relationModels")
const {
  Sequelize
} = require("sequelize");
const helpers = require("../../utils/helpers")

module.exports = {
  async login(email, userpass) {

    const user = await usuario.findOne({
      attributes: ["email_usuario", "contrasena_usuario"],
      where: {
        email_usuario: email,
      }
    });

    if (user) {
      const savedpass = user.contrasena_usuario;
      const validPass = await helpers.matchPassword(userpass, savedpass);
      return ({ validPass: validPass });
    }
  }
}