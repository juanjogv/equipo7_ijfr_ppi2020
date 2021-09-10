var DataTypes = require("sequelize").DataTypes;
var _comentario = require("./Comentario");
var _escaneo = require("./Escaneo");
var _publicacion = require("./Publicacion");
var _usuario = require("./Usuario");

function initModels(sequelize) {
  var comentario = _comentario(sequelize, DataTypes);
  var escaneo = _escaneo(sequelize, DataTypes);
  var publicacion = _publicacion(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  comentario.belongsTo(publicacion, { as: "id_publicacion_publicacion", foreignKey: "id_publicacion"});
  publicacion.hasMany(comentario, { as: "comentarios", foreignKey: "id_publicacion"});
  comentario.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(comentario, { as: "comentarios", foreignKey: "id_usuario"});
  escaneo.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(escaneo, { as: "escaneos", foreignKey: "id_usuario"});
  publicacion.belongsTo(usuario, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuario.hasMany(publicacion, { as: "publicacions", foreignKey: "id_usuario"});

  return {
    comentario,
    escaneo,
    publicacion,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
