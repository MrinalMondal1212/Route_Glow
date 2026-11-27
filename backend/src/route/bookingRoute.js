const bookingcontroller = require("../controller/bookingController");
const auth = require("../middleware/authMiddleware");
const express = require("express");
const route = express.Router();

/**
 * @swagger
 * /api/booking/create/{id}:
 *   post:
 *     summary: Create a booking
 *     tags:
 *       - Booking
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
 *       201:
 *         description: Booking confirmed successfully
 *       400:
 *         description: Invalid booking details
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
route.post(
  "/booking/create/:id",
  auth.verifyToken,
  bookingcontroller.createBooking
);

/**
 * @swagger
 * /api/booking/my-bookings:
 *   get:
 *     summary: Get all bookings of logged-in user
 *     tags:
 *       - Booking
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Bookings retrieved successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */
route.get(
  "/booking/my-bookings",
  auth.verifyToken,
  bookingcontroller.getBookings
);

/**
 * @swagger
 * /api/booking/my-bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     tags:
 *       - Booking
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking retrieved successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
route.get(
  "/booking/my-bookings/:id",
  auth.verifyToken,
  bookingcontroller.getbookingbyId
);

/**
 * @swagger
 * /api/booking/cancel/{id}:
 *   patch:
 *     summary: Cancel a booking
 *     tags:
 *       - Booking
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking cancelled successfully
 *       400:
 *         description: Booking is already cancelled
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
route.patch(
  "/booking/cancel/:id",
  auth.verifyToken,
  bookingcontroller.cancelBooking
);

module.exports = route;