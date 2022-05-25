const lista_cabcontroller = require("../controllers/lista_cab.controller");

module.exports = (app) => {
  app.get("/lista_cab", lista_cabcontroller.list);

  app.get("/lista_cab-filter", lista_cabcontroller.listFilter);

  app.get("/lista_cab/find/:id", lista_cabcontroller.getById);

  app.post("/lista_cab/create", lista_cabcontroller.create);

  app.put("/lista_cab/update", lista_cabcontroller.update);

  app.delete("/lista_cab/remove/:id", lista_cabcontroller.remove);
};