const db = require("../db");
const Users = require("./Users");
const Families = require("./Families");
const Envelopes = require("./Envelopes");
const Accounts = require("./Accounts");
const Transactions = require("./Transactions");
const Entities = require("./Entity");

//Relation Family - User
Families.hasMany(Users)
Users.belongsTo(Families)

//Relation Family - Envelopes
Families.hasMany(Envelopes)
Envelopes.belongsTo(Families)

//Relation Family - Accounts
Families.hasMany(Accounts)
Accounts.belongsTo(Families)

//Relation Envelopes - Transactions
Envelopes.hasMany(Transactions)
Transactions.belongsTo(Envelopes)

//Relation Accounts - Transactions
Accounts.hasMany(Transactions)
Transactions.belongsTo(Accounts)

//Relation Entities - Transactions
Entities.hasMany(Transactions)
Transactions.belongsTo(Entities)

module.exports = {
  Users,
  Families,
  Entities,
  Envelopes,
  Accounts,
  Transactions,
};
