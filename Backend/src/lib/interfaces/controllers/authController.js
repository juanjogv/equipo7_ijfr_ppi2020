const { usuario } = require("../../infrastructure/relationModels")
const {
  Sequelize
} = require("sequelize");
const { matchPassword, encryptPassword } = require("../../utils/helpers")

module.exports = {
  async login(req) {

    const { email, userpass } = req.body;

    const user = await usuario.findOne({
      attributes: ["email_usuario", "contrasena_usuario"],
      where: {
        email_usuario: email,
      }
    });

    if (!user) throw "EMAIL_NOT_FOUND"

    if (!await matchPassword(userpass, user.contrasena_usuario)) throw "EMAIL_AND_PASS_NOT_MATCH"
  },

  async signin(req) {

  }
}