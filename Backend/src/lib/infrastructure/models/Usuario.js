const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    contrasena_usuario: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    apellido_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    foto_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion_usuario: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    escaneos_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usuario_pkey",
        unique: true,
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
