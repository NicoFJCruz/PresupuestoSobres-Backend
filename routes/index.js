const express = require("express")
const userRouter = require("./Users")
const familyRouter = require("./Families")
const router = express.Router()

router.use("/users", userRouter)
router.use("/families", familyRouter)

module.exports = router