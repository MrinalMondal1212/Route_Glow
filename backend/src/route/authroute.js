const usercontroller = require("../controller/authController")
const authMiddleware = require("../middleware/authMiddleware")
const express = require("express")
const route = express.Router()


route.post("/sign-up", usercontroller.signup)
route.post("/login", usercontroller.login)

module.exports = route