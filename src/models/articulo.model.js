const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const ArticuloModel = sequelize.define(
  "Articulo",
  {
    // Model attributes are defined here
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   art_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   art_precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
   art_cat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,

    }},
    {
      tableName: "tb_articulo",
      timestamps: false,
    }
  );
  
  module.exports = {ArticuloModel};