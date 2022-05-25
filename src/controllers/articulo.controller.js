const articuloService = require("../services/articulo.service");

const list = async (req, res) => {
  const articulos = await articuloService.list(req.query.q);

  res.send({ success: true, articulos });
};

const listFilter = async (req, res) => {
  const articulos = await articuloService.listFilter(req.query.q);

  res.send({ success: true, articulos });
};

const getById = async (req, res) => {
  const articulo = await articuloService.getById(req.params.id);

  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["articulo"] = articulo;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const articulo = await articuloService.create(req.body);
  res.status(202).send({ success: true, articulo });
};

const update = async (req, res) => {
  const articulo = await articuloService.update(req.body);
  res.status(202).send({ success: true, articulo });
};

const remove = async (req, res) => {
  const booleanValue = await articuloService.remove(req.params.id);
  res.status(202).send({ success: booleanValue });
};

module.exports = {
  list,
  listFilter,
  getById,
  create,
  update,
  remove,
};