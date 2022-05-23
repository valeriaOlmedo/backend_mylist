const { Sequelize } = require("sequelize");

//Conexion a la base de datos

const sequelize = new Sequelize("mylist", "postgres", "admin", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("La conexión se realizó correctamente");
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
};

testConnection();

const db = {
  Sequelize,
  sequelize,
};

module.exports = db;