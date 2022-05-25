const articulocontroller = require("../controllers/articulo.controller");

module.exports = (app) => {
  app.get("/articulo", articulocontroller.list);

  app.get("/articulo-filter", articulocontroller.listFilter);

  app.get("/articulo/find/:id", articulocontroller.getById);

  app.post("/articulo/create", articulocontroller.create);

  app.put("/articulo/update", articulocontroller.update);

  app.delete("/articulo/remove/:id", articulocontroller.remove);
};