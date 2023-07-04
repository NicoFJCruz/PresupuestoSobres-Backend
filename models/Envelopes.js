const S = require("sequelize");
const db = require("../db");

class Envelopes extends S.Model {}

Envelopes.init(
  {
    name: { type: S.STRING, allowNull: false },
    budget: { type: S.DOUBLE, allowNull: false },
    timePeriod: { type: S.STRING },
  },
  { sequelize: db, modelName: "envelopes" }
);

module.exports = Envelopes;
