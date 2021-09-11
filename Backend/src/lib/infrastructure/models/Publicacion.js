const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publicacion', {
    id_publicacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo_publicacion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    body_publicacion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    img_publicacion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fecha_publicacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'publicacion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "publicacion_pkey",
        unique: true,
        fields: [
          { name: "id_publicacion" },
        ]
      },
    ]
  });
};
