const express = require("express");
const accountRouter = express.Router();
const { accountCreate, accountAll, accountEdit } = require("../controllers/accounts");
const { validateUser, validateFamilyAdmin } = require("../tokens/validation");

accountRouter.get("/", validateUser, accountAll);
accountRouter.put("/:id", validateUser, accountEdit);
accountRouter.post("/", validateUser, accountCreate);

module.exports = accountRouter;
