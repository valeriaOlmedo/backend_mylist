const { Lista_detModel } = require("../models/lista_det.model");
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const lista_detModelResults = await Lista_detModel.findAll(
    {
      order:['dlist_id'],
    }
  );

  const lista_detArray = new Array();
  for (let i = 0; i < lista_detModelResults.length; i++) {
    const lista_detResult = lista_detModelResults[i];
    lista_detArray.push(lista_detResult.dataValues);
  }

  return lista_detArray;
};

//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let lista_detResult = await sequelize.query(
    `SELECT * FROM tb_lista_det WHERE (UPPER(dlist_art_id) LIKE :q)
                                           ORDER BY dlist_id`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type:QueryTypes.SELECT
    }
  );

  lista_detResult = lista_detResult && lista_detResult[0] ? lista_detResult[0] : [];

  return lista_detResult;
};


// Buscar en la base de datos por codigo
const getById = async (dlist_id) => {
  const lista_detModelResult = await Lista_detModel.findByPk(dlist_id);

  if (lista_detModelResult) {
    return lista_detModelResult.dataValues;
  } else {
    return null;
  }
};

//Guardar datos nuevos en la base de datos
const create = async (data) => {
  const lista_detModelResult = await Lista_detModel.create(data);

  if (lista_detModelResult) {
    return lista_detModelResult.dataValues;
  } else {
    return null;
  }

  return data;
};

//Actualizar datos en la base de datos
const update = async (data) => {
  const lista_detModelCount = await Lista_detModel.update(data, {
    where: {
      dlist_id: data.dlist_id,
    },
  });

  if (lista_detModelCount > 0) {
    const lista_detModelResult = await Lista_detModel.findByPk(data.dlist_id);
    return lista_detModelResult.dataValues;
  } else {
    return null;
  }
};

//Eliminar datos en la base de datos

const remove = async (dlist_id) => {
  const lista_detModelCount = await Lista_detModel.destroy({
    where: {
      dlist_id: dlist_id,
    },
  });

  if (lista_detModelCount > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  list,
  listFilter,
  getById,
  create,
  update,
  remove,
};