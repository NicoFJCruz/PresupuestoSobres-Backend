const db = require("../db");
const users = require("./Users");
const families = require("./Families");
const envelopes = require("./Envelopes");
const accounts = require("./Accounts");
const transactions = require("./Transactions");
const entities = require("./Entity");

//Relation Family - User
families.hasMany(users)
users.belongsTo(families)

//Relation Family - Envelopes
families.hasMany(envelopes)
envelopes.belongsTo(families)

//Relation Family - Accounts
families.hasMany(accounts)
accounts.belongsTo(families)

//Relation Envelopes - Transactions
envelopes.hasMany(transactions)
transactions.belongsTo(envelopes)

//Relation Accounts - Transactions
accounts.hasMany(transactions)
transactions.belongsTo(accounts)

//Relation Entities - Transactions
entities.hasMany(transactions)
transactions.belongsTo(entities)

module.exports = {
  users,
  families,
  entities,
  envelopes,
  accounts,
  transactions,
};
