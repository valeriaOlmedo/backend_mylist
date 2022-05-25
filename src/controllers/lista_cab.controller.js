const lista_cabService = require("../services/lista_cab.service");

const list = async (req, res) => {
  const lista_cabs = await lista_cabService.list(req.query.q);

  res.send({ success: true, lista_cabs });
};

const listFilter = async (req, res) => {
  const lista_cabs = await lista_cabService.listFilter(req.query.q);

  res.send({ success: true, lista_cabs });
};

const getById = async (req, res) => {
  const lista_cab = await lista_cabService.getById(req.params.id);

  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["lista_cab"] = lista_cab;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const lista_cab = await lista_cabService.create(req.body);
  res.status(202).send({ success: true, lista_cab });
};

const update = async (req, res) => {
  const lista_cab = await lista_cabService.update(req.body);
  res.status(202).send({ success: true, lista_cab });
};

const remove = async (req, res) => {
  const booleanValue = await lista_cabService.remove(req.params.id);
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