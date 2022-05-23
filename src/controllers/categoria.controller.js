const categoriaService = require("../services/categoria.service");

const list = async (req, res) => {
  const categorias = await categoriaService.list(req.query.q);

  res.send({ success: true, categorias });
};

const listFilter = async (req, res) => {
  const categorias = await categoriaService.listFilter(req.query.q);

  res.send({ success: true, categorias });
};

const getById = async (req, res) => {
  const categoria = await categoriaService.getById(req.params.id);

  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["categoria"] = categoria;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const categoria = await categoriaService.create(req.body);
  res.status(202).send({ success: true, categoria });
};

const update = async (req, res) => {
  const categoria = await categoriaService.update(req.body);
  res.status(202).send({ success: true, categoria });
};

const remove = async (req, res) => {
  const booleanValue = await categoriaService.remove(req.params.id);
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