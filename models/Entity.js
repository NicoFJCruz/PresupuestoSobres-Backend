const S = require("sequelize");
const db = require("../db");

class Entity extends S.Model {}

Entity.init(
  {
    name: { type: S.STRING, allowNull: false },
    adress: { type: S.STRING },
    phonenumber: { type: S.INTEGER },
  },
  { sequelize: db, modelName: "entities" }
);

module.exports = Entity;
