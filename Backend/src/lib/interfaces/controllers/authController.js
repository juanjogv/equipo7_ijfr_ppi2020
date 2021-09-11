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
    const { nombre_usuario, contrasena_usuario, apellido_usuario, email_usuario } = req.body

    const userCheck = await usuario.findOne({ where: { email_usuario } })

    if (userCheck) throw "ERR_DUP_ENTRY"

    const encrypted_contrasena_usuario = await encryptPassword(contrasena_usuario);

    await usuario.create({
      nombre_usuario,
      contrasena_usuario: encrypted_contrasena_usuario,
      apellido_usuario,
      email_usuario,
      escaneos_usuario: 0,
    });
  }
}