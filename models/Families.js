const S = require("sequelize");
const db = require("../db");

class Family extends S.Model {}

Family.init(
  { name: { type: S.STRING, allowNull: false } },
  { sequelize: db, modelName: "families" }
);

module.exports = Family;
