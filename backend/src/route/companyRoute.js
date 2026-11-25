const express = require("express")
const companyController = require("../controller/companyController")
const route = express.Router()

route.post("/company/sign-up", companyController.signup)
route.post("/company/login", companyController.companyLogin)

module.exports = route