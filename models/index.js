const db = require("../db");
const users = require("./Users");
const families = require("./Families");
const envelopes = require("./Envelopes");
const accounts = require("./Accounts");
const transactions = require("./Transactions");
const entities = require("./Entity");

module.exports = {
  users,
  families,
  entities,
  envelopes,
  accounts,
  transactions,
};
