const express = require("express")
const adminController = require("../controller/adminController")
const route = express.Router()

route.get("/admin/companies/pending", adminController.getpendingCompanies)
route.patch("/admin/companies/:id/approve", adminController.approveCompanies)
route.patch("/admin/companies/:id/reject", adminController.rejectCompanies)

module.exports = route