const lista_detService = require("../services/lista_det.service");

const list = async (req, res) => {
  const lista_dets = await lista_detService.list(req.query.q);

  res.send({ success: true, lista_dets });
};

const listFilter = async (req, res) => {
  const lista_dets = await lista_detService.listFilter(req.query.q);

  res.send({ success: true, lista_dets });
};

const getById = async (req, res) => {
  const lista_det = await lista_detService.getById(req.params.id);

  let jsonResultado = req.query;
  jsonResultado["success"] = true;
  jsonResultado["lista_det"] = lista_det;

  res.status(201).send(jsonResultado);
};

const create = async (req, res) => {
  const lista_det = await lista_detService.create(req.body);
  res.status(202).send({ success: true, lista_det });
};

const update = async (req, res) => {
  const lista_det = await lista_detService.update(req.body);
  res.status(202).send({ success: true, lista_det });
};

const remove = async (req, res) => {
  const booleanValue = await lista_detService.remove(req.params.id);
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