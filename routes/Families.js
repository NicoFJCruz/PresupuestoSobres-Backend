const express = require("express");
const familyRouter = express.Router();
const { familyCreate, familyAll } = require("../controllers/families");

familyRouter.get("/", familyAll);
familyRouter.post("/", familyCreate);

module.exports = familyRouter;
