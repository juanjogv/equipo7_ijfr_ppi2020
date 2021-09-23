const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    id_comentario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contenido_comentario: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fecha_comentario: {
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
    },
    id_publicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicacion',
        key: 'id_publicacion'
      }
    }
  }, {
    sequelize,
    tableName: 'comentario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "comentario_pkey",
        unique: true,
        fields: [
          { name: "id_comentario" },
        ]
      },
    ]
  });
};
