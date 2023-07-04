const S = require("sequelize");
const db = require("../db");

class Family extends S.Model {}

Family.init({}, { sequelize: db, modelName: "families" });

module.exports = Family;
