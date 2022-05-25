const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const Lista_cabModel = sequelize.define(
  "Lista_cab",
  {
    // Model attributes are defined here
    clist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    clist_titulo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    clist_estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    clist_fecha: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }},
    {
      tableName: "tb_lista_cab",
      timestamps: false,
    }
  );
  
  module.exports = {Lista_cabModel};