const { DataTypes } = require("sequelize");
const { sequelize } = require("../services/bd.service");

const CategoriaModel = sequelize.define(
  "Categoria",
  {
    // Model attributes are defined here
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   cat_descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cat_codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
    {
      tableName: "tb_categoria",
      timestamps: false,
    }
  );
  
  module.exports = {CategoriaModel};