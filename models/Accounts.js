const S = require("sequelize");
const db = require("../db");

class Account extends S.Model {}

Account.init(
  {
    name: { type: S.STRING, allowNull: false },
    amount: { type: S.DOUBLE, allowNull: false },
  },
  { sequelize: db, modelName: "accounts" }
);

module.exports = Account;
