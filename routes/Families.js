const express = require("express");
const familyRouter = express.Router();
const { familyCreate } = require("../controllers/families");
const { validateUser, validateFamilyAdmin } = require("../tokens/validation");

familyRouter.post("/", familyCreate);

module.exports = familyRouter;
