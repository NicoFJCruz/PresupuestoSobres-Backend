const db = require("../db");
const User = require("./Users");
const Family = require("./Families");
const Envelopes = require("./Envelopes");
const Account = require("./Accounts");
const Transaction = require("./Transactions");
const Entity = require("./Entity");

//Relation Family - User
Family.hasMany(User)
User.belongsTo(Family)

//Relation Family - Envelopes
Family.hasMany(Envelopes)
Envelopes.belongsTo(Family)

//Relation Family - Accounts
Family.hasMany(Account)
Account.belongsTo(Family)

//Relation Envelopes - Transactions
Envelopes.hasMany(Transaction)
Transaction.belongsTo(Envelopes)

//Relation Account - Transaction
Account.hasMany(Transaction)
Transaction.belongsTo(Account)

//Relation Entities - Transaction
Entity.hasMany(Transaction)
Transaction.belongsTo(Entity)

module.exports = {
  User,
  Family,
  Entity,
  Envelopes,
  Account,
  Transaction,
};
