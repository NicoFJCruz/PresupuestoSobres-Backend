const express = require("express")
const userRouter = require("./Users")
const familyRouter = require("./Families")
const accountRouter = require("./Accounts")
const router = express.Router()

router.use("/users", userRouter)
router.use("/families", familyRouter)
router.use("/accounts", accountRouter)

module.exports = router