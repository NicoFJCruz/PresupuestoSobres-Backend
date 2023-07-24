const express = require("express");
const accountRouter = express.Router();
const { accountCreate, accountAll } = require("../controllers/accounts");
const { validateUser, validateFamilyAdmin } = require("../tokens/validation");

accountRouter.get("/", accountAll);
accountRouter.post("/", validateUser, accountCreate);

module.exports = accountRouter;
