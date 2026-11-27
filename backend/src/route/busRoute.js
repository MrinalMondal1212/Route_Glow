const buscontroller = require("../controller/busController");
const express = require("express");
const route = express.Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

/**
 * @swagger
 * /api/company/create-bus:
 *   post:
 *     summary: Create a new bus with bus and destination images
 *     tags: [Bus Management]
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - busName
 *               - busNumber
 *               - source
 *               - destination
 *               - busType
 *               - category
 *               - totalSeats
 *               - description
 *             properties:
 *               busName:
 *                 type: string
 *                 example: Royal Express
 *               busNumber:
 *                 type: string
 *                 example: WB19A1231
 *               source:
 *                 type: string
 *                 example: Kolkata
 *               destination:
 *                 type: string
 *                 example: Digha
 *               busType:
 *                 type: string
 *                 enum:
 *                   - Seater
 *                   - Sleeper
 *                   - Semi-Sleeper
 *                 example: Seater
 *               category:
 *                 type: string
 *                 enum:
 *                   - AC
 *                   - NON AC
 *                 example: AC
 *               totalSeats:
 *                 type: integer
 *                 example: 20
 *               description:
 *                 type: string
 *                 example: Comfortable AC seater bus with modern facilities
 *               amenities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - WiFi
 *                   - Charging Point
 *                   - Water Bottle
 *               busImage:
 *                 type: string
 *                 format: binary
 *                 description: Upload one bus image
 *               destinationImage:
 *                 type: string
 *                 format: binary
 *                 description: Upload one destination image
 *
 *     responses:
 *       201:
 *         description: Bus created successfully
 *       400:
 *         description: Missing required fields or bus number already exists
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Only approved companies can post a bus
 *       500:
 *         description: Internal server error
 */
route.post(
  "/company/create-bus",
  auth.verifyToken,
  upload.fields([
    { name: "busImage", maxCount: 1 },
    { name: "destinationImage", maxCount: 1 },
  ]),
  buscontroller.createBus
);

/**
 * @swagger
 * /api/company/get-buses:
 *   get:
 *     summary: Get all company buses
 *     tags:
 *       - Bus Management
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Buses retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.get("/company/get-buses", auth.verifyToken, buscontroller.getAllbus);

/**
 * @swagger
 * /api/company/get-bus/{id}:
 *   get:
 *     summary: Get bus by ID
 *     tags:
 *       - Bus Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Bus ID
 *     responses:
 *       200:
 *         description: Bus retrieved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Bus not found
 *       500:
 *         description: Internal server error
 */
route.get("/company/get-bus/:id", auth.verifyToken, buscontroller.getbusByid);

/**
 * @swagger
 * /api/company/get-bus/{id}:
 *   patch:
 *     summary: Update bus details
 *     tags:
 *       - Bus Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Bus ID
 *     responses:
 *       200:
 *         description: Bus updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Bus not found
 *       500:
 *         description: Internal server error
 */
route.patch("/company/get-bus/:id", auth.verifyToken, buscontroller.getbusByidUpdate);

/**
 * @swagger
 * /api/compamy/delete/{id}:
 *   patch:
 *     summary: Soft delete a bus
 *     tags:
 *       - Bus Management
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Bus ID
 *     responses:
 *       200:
 *         description: Bus deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Bus not found
 *       500:
 *         description: Internal server error
 */
route.patch("/compamy/delete/:id", auth.verifyToken, buscontroller.softDelete);

module.exports = route;