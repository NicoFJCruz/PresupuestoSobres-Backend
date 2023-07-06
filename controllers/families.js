const Sequelize = require("sequelize");
const { Family } = require("../models");
const { capitalizeWord } = require("../utils/capitalizeWord");
const { generateHash } = require("../utils/hashFamily");

const familyAll = async (req, res, next) => {
  try {
    const families = await Family.findAll();

    res.send(families);
  } catch (error) {
    console.error(error);
    next();
  }
};

const familyCreate = async (req, res, next) => {
  try {
    const { lastname } = req.body;
    const capitalize = capitalizeWord(lastname);
    const hash = generateHash(capitalize);

    const family = await Family.create({ name: `${capitalize}_${hash}` });

    res.send(family);
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = { familyCreate, familyAll };
