const { Lista_cabModel } = require("../models/lista_cab.model");
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const listaModelResults = await Lista_cabModel.findAll(
    {
      order:['clist_id'],
    }
  );

  const listaArray = new Array();
  for (let i = 0; i < listaModelResults.length; i++) {
    const listaResult = listaModelResults[i];
    listaArray.push(listaResult.dataValues);
  }

  return listaArray;
};

//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let listaResult = await sequelize.query(
    `SELECT * FROM tb_lista WHERE (UPPER(clist_titulo) LIKE :q)
                                           ORDER BY clist_id`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type:QueryTypes.SELECT
    }
  );

  listaResult = listaResult && listaResult[0] ? listaResult[0] : [];

  return listaResult;
};


// Buscar en la base de datos por codigo
const getById = async (clist_id) => {
  const listaModelResult = await Lista_cabModel.findByPk(clist_id);

  if (listaModelResult) {
    return listaModelResult.dataValues;
  } else {
    return null;
  }
};

//Guardar datos nuevos en la base de datos
const create = async (data) => {
  const listaModelResult = await Lista_cabModel.create(data);

  if (listaModelResult) {
    return listaModelResult.dataValues;
  } else {
    return null;
  }

  return data;
};

//Actualizar datos en la base de datos
const update = async (data) => {
  const listaModelCount = await Lista_cabModel.update(data, {
    where: {
      clist_id: data.clist_id,
    },
  });

  if (listaModelCount > 0) {
    const listaModelResult = await Lista_cabModel.findByPk(data.clist_id);
    return listaModelResult.dataValues;
  } else {
    return null;
  }
};

//Eliminar datos en la base de datos

const remove = async (clist_id) => {
  const listaModelCount = await Lista_cabModel.destroy({
    where: {
      clist_id: clist_id,
    },
  });

  if (listaModelCount > 0) {
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