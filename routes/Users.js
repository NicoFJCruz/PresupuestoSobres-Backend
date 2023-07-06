const express = require("express");
const userRouter = express.Router();
const {
  userLogin,
  userRegister,
  userMe,
  userLogout,
  userAll,
  userFamily,
} = require("../controllers/users");
const { validateUser, validateFamilyAdmin } = require("../tokens/validation");

userRouter.get("/", validateUser, userAll);
userRouter.get("/me", validateUser, userMe);
userRouter.get("/family/:familyId", validateUser, userFamily);
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/logout", userLogout);

module.exports = userRouter;
