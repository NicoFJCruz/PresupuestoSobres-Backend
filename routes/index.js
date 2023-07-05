const express = require("express")
const userRouter = require("./Users")
const router = express.Router()

router.use("/users", userRouter)

module.exports = router