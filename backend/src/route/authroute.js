const usercontroller = require("../controller/authController")
const authMiddleware = require("../middleware/authMiddleware")
const express = require("express")
const route = express.Router()

/**
 * @swagger
 * /sign-up:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     responses:
 *       201:
 *         description: User registered successfully
 */
route.post("/sign-up", usercontroller.signup)
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Login successful
 */
route.post("/login", usercontroller.login)

module.exports = route