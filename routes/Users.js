const express = require("express");
const userRouter = express.Router();
const { userLogin, userRegister, userMe, userLogout } = require("../controllers/users");
const { validateUser } = require("../tokens/validation");

userRouter.get("/me", validateUser, userMe);
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.post('/logout', userLogout)

module.exports = userRouter;
