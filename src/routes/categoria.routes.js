const categoriacontroller = require("../controllers/categoria.controller");

module.exports = (app) => {
  app.get("/categoria", categoriacontroller.list);

  app.get("/categoria-filter", categoriacontroller.listFilter);

  app.get("/categoria/find/:id", categoriacontroller.getById);

  app.post("/categoria/create", categoriacontroller.create);

  app.put("/categoria/update", categoriacontroller.update);

  app.delete("/categoria/remove/:id", categoriacontroller.remove);
};
