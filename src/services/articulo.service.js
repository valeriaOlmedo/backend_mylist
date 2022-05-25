const { ArticuloModel } = require("../models/articulo.model");
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const articuloModelResults = await ArticuloModel.findAll(
    {
      order:['art_id'],
    }
  );

  const articuloArray = new Array();
  for (let i = 0; i < articuloModelResults.length; i++) {
    const articuloResult = articuloModelResults[i];
    articuloArray.push(articuloResult.dataValues);
  }

  return articuloArray;
};

//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let articuloResult = await sequelize.query(
    `SELECT * FROM tb_articulo WHERE (UPPER(art_descripcion) LIKE :q)
                                           ORDER BY art_id`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type:QueryTypes.SELECT
    }
  );

  articuloResult = articuloResult && articuloResult[0] ? articuloResult[0] : [];

  return articuloResult;
};


// Buscar en la base de datos por codigo
const getById = async (art_id) => {
  const articuloModelResult = await ArticuloModel.findByPk(art_id);

  if (articuloModelResult) {
    return articuloModelResult.dataValues;
  } else {
    return null;
  }
};

//Guardar datos nuevos en la base de datos
const create = async (data) => {
  const articuloModelResult = await ArticuloModel.create(data);

  if (articuloModelResult) {
    return articuloModelResult.dataValues;
  } else {
    return null;
  }

  return data;
};

//Actualizar datos en la base de datos
const update = async (data) => {
  const articuloModelCount = await ArticuloModel.update(data, {
    where: {
      art_id: data.art_id,
    },
  });

  if (articuloModelCount > 0) {
    const articuloModelResult = await ArticuloModel.findByPk(data.art_id);
    return articuloModelResult.dataValues;
  } else {
    return null;
  }
};

//Eliminar datos en la base de datos

const remove = async (art_id) => {
  const articuloModelCount = await ArticuloModel.destroy({
    where: {
      art_id: art_id,
    },
  });

  if (articuloModelCount > 0) {
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