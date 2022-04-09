const { CategoriaModel } = require("../models/categoria.model");
const { sequelize } = require("./bd.service");
const { QueryTypes } = require("sequelize");

// Consulta en la base de datos
const list = async (query, pageStart = 1, pageLimit = 10) => {
  const categoriaModelResults = await CategoriaModel.findAll(
    {
      order:['cat_id'],
    }
  );

  const categoriaArray = new Array();
  for (let i = 0; i < categoriaModelResults.length; i++) {
    const categoriaResult = categoriaModelResults[i];
    categoriaArray.push(categoriaResult.dataValues);
  }

  return categoriaArray;
};

//Consulta en la base de datos filtrando por palabras
const listFilter = async (query, pageStart = 1, pageLimit = 10) => {
  let categoriaResult = await sequelize.query(
    `SELECT * FROM tb_categoria WHERE (UPPER(cat_descripcion) LIKE :q)
                                           ORDER BY cat_id`,
    {
      replacements: {
        q: query ? "%" + query.toUpperCase() + "%" : "%",
      },
      //type:QueryTypes.SELECT
    }
  );

  categoriaResult = categoriaResult && categoriaResult[0] ? categoriaResult[0] : [];

  return categoriaResult;
};


// Buscar en la base de datos por codigo
const getById = async (cat_id) => {
  const categoriaModelResult = await CategoriaModel.findByPk(cat_id);

  if (categoriaModelResult) {
    return categoriaModelResult.dataValues;
  } else {
    return null;
  }
};

//Guardar datos nuevos en la base de datos
const create = async (data) => {
  const categoriaModelResult = await CategoriaModel.create(data);

  if (categoriaModelResult) {
    return categoriaModelResult.dataValues;
  } else {
    return null;
  }

  return data;
};

//Actualizar datos en la base de datos
const update = async (data) => {
  const categoriaModelCount = await CategoriaModel.update(data, {
    where: {
      cat_id: data.cat_id,
    },
  });

  if (categoriaModelCount > 0) {
    const categoriaModelResult = await CategoriaModel.findByPk(data.cat_id);
    return categoriaModelResult.dataValues;
  } else {
    return null;
  }
};

//Eliminar datos en la base de datos

const remove = async (cat_id) => {
  const categoriaModelCount = await CategoriaModel.destroy({
    where: {
      cat_id: cat_id,
    },
  });

  if (categoriaModelCount > 0) {
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