const lista_detcontroller = require("../controllers/lista_det.controller");

module.exports = (app) => {
  app.get("/lista_det", lista_detcontroller.list);

  app.get("/lista_det-filter", lista_detcontroller.listFilter);

  app.get("/lista_det/find/:id", lista_detcontroller.getById);

  app.post("/lista_det/create", lista_detcontroller.create);

  app.put("/lista_det/update", lista_detcontroller.update);

  app.delete("/lista_det/remove/:id", lista_detcontroller.remove);
};