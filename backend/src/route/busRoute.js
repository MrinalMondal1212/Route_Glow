const buscontroller = require("../controller/busController")
const express = require("express")
const route = express.Router()
const auth = require("../middleware/authMiddleware")


route.post("/company/create-bus", auth.verifyToken, buscontroller.createBus)
route.get("/company/get-buses", auth.verifyToken, buscontroller.getAllbus)
route.get("/company/get-bus/:id", auth.verifyToken , buscontroller.getbusByid)
route.patch("/company/get-bus/:id", auth.verifyToken, buscontroller.getbusByidUpdate)
route.patch("/compamy/delete/:id", auth.verifyToken, buscontroller.softDelete)

module.exports = route