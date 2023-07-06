const Sequelize = require("sequelize");
const { User, Family } = require("../models");
const { capitalizeWord } = require("../utils/capitalizeWord");
const { generateHash } = require("../utils/hashFamily");

const familyCreate = async (req, res, next) => {
  try {
    const { lastname } = req.body;
    const capitalize = capitalizeWord(lastname)
    const hash = generateHash(capitalize)

    const users = await Family.create({name: `${capitalize}_${hash}`});

    res.send(users);
  } catch (error) {
    console.error(error);
    next();
  }
};

module.exports = {
    familyCreate,
};
