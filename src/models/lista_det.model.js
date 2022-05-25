const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const Lista_detModel = sequelize.define(
  "Lista_det",
  {
    // Model attributes are defined here
    dlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dlist_art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dlist_precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    dlist_cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,

    },
    dlist_idcab: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
        }},
    {
      tableName: "tb_lista_det",
      timestamps: false,
    }
  );
  
  module.exports = {Lista_detModel};