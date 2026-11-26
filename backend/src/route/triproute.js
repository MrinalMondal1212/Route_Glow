const tripcontroller = require("../controller/tripController")
const express = require("express")
const route = express.Router()
const auth = require("../middleware/authMiddleware")
// create trip
route.post("/company/trip/create", auth.verifyToken, tripcontroller.createTrip)
//get all trip by company
route.get("/company/trip/get", auth.verifyToken, tripcontroller.getAllTrip)
//get trip by id
route.get("/company/trip/get/:id", auth.verifyToken, tripcontroller.getTipById)
//get trip by bus
route.get("/company/trip/get/bus/:id", auth.verifyToken, tripcontroller.getTripbyBus)
//update trip details
route.patch("/company/trip/update/:id", auth.verifyToken, tripcontroller.updateTrip)
//trip soft deleting
route.patch("/company/trip/soft-delete/:id", auth.verifyToken , tripcontroller.softDelteTrip)
module.exports = route