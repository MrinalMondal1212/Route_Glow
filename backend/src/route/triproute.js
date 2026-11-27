const tripcontroller = require("../controller/tripController");
const express = require("express");
const route = express.Router();
const auth = require("../middleware/authMiddleware");

/**
 * @swagger
 * /api/company/trip/create:
 *   post:
 *     summary: Create a new trip
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Trip created successfully
 *       400:
 *         description: Invalid trip details
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */
route.post("/company/trip/create", auth.verifyToken, tripcontroller.createTrip);

/**
 * @swagger
 * /api/company/trip/get:
 *   get:
 *     summary: Get all trips created by company
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Trips retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.get("/company/trip/get", auth.verifyToken, tripcontroller.getAllTrip);

/**
 * @swagger
 * /api/company/trip/get/{id}:
 *   get:
 *     summary: Get trip by ID
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trip retrieved successfully
 *       404:
 *         description: Trip not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.get("/company/trip/get/:id", auth.verifyToken, tripcontroller.getTipById);

/**
 * @swagger
 * /api/company/trip/get/bus/{id}:
 *   get:
 *     summary: Get trips by bus ID
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bus trips retrieved successfully
 *       404:
 *         description: Bus or trips not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.get("/company/trip/get/bus/:id", auth.verifyToken, tripcontroller.getTripbyBus);

/**
 * @swagger
 * /api/company/trip/update/{id}:
 *   patch:
 *     summary: Update trip details
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trip updated successfully
 *       404:
 *         description: Trip not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.patch("/company/trip/update/:id", auth.verifyToken, tripcontroller.updateTrip);

/**
 * @swagger
 * /api/company/trip/soft-delete/{id}:
 *   patch:
 *     summary: Soft delete a trip
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trip deleted successfully
 *       404:
 *         description: Trip not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.patch("/company/trip/soft-delete/:id", auth.verifyToken, tripcontroller.softDelteTrip);

/**
 * @swagger
 * /api/company/trip/seats/{id}:
 *   get:
 *     summary: Get all seats of a trip
 *     tags:
 *       - Trip Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trip seats retrieved successfully
 *       404:
 *         description: Trip not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.get("/company/trip/seats/:id", auth.verifyToken, tripcontroller.getTripSeats);

/**
 * @swagger
 * /api/reserve-seat/{id}:
 *   post:
 *     summary: Reserve a seat for five minutes
 *     tags:
 *       - Seat Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Trip ID
 *     responses:
 *       200:
 *         description: Seat reserved successfully
 *       400:
 *         description: Invalid seat number
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Seat unavailable
 *       500:
 *         description: Internal server error
 */
route.post(
  "/reserve-seat/:id",
  auth.verifyToken,
  tripcontroller.reserveSeat
);
// serch trip

/**
 * @swagger
 * /api/search-trips:
 *   get:
 *     summary: Search available bus trips
 *     description: Search trips using source, destination and journey date.
 *     tags:
 *       - Trip Management
 *     parameters:
 *       - in: query
 *         name: source
 *         required: true
 *         schema:
 *           type: string
 *         example: Kolkata
 *       - in: query
 *         name: destination
 *         required: true
 *         schema:
 *           type: string
 *         example: Durgapur
 *       - in: query
 *         name: journeyDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         example: "2026-12-01"
 *     responses:
 *       200:
 *         description: Matching trips retrieved successfully
 *       400:
 *         description: Missing or invalid search parameters
 *       404:
 *         description: No buses or trips found
 *       500:
 *         description: Internal server error
 */
route.get("/search-trips", tripcontroller.searchTrip);



module.exports = route;