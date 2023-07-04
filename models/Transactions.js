const S = require("sequelize");
const db = require("../db");

class Transaction extends S.Model {}

Transaction.init(
  {
    description: { type: S.TEXT },
    amount: { type: S.DOUBLE, allowNull: false },
    day: { type: S.DATE, allowNull: false },
    type: { type: S.ENUM, values: ["gasto", "ingreso"], allowNull: false },
    timePeriod: { type: S.STRING },
    fixed: { type: S.BOOLEAN, defaultValue: false },
    notes: { type: S.TEXT },
  },
  { sequelize: db, modelName: "transactions" }
);

module.exports = Transaction;
