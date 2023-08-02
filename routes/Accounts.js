const express = require("express");
const accountRouter = express.Router();
const {
  accountCreate,
  accountAll,
  accountEdit,
  accountDelete,
  accountOne
} = require("../controllers/accounts");
const { validateUser, validateFamilyAdmin } = require("../tokens/validation");

accountRouter.get("/", validateUser, accountAll);
accountRouter.get("/:id", validateUser, accountOne);
accountRouter.put("/:id", validateUser, accountEdit);
accountRouter.post("/", validateUser, accountCreate);
accountRouter.delete("/:id", validateUser, validateFamilyAdmin, accountDelete);

module.exports = accountRouter;
