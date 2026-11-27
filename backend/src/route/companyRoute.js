const express = require("express");
const companyController = require("../controller/companyController");
const route = express.Router();

/**
 * @swagger
 * /api/company/sign-up:
 *   post:
 *     summary: Register a new company
 *     tags:
 *       - Company
 *     responses:
 *       201:
 *         description: Company registered successfully
 *       400:
 *         description: Invalid registration details
 *       500:
 *         description: Internal server error
 */
route.post("/company/sign-up", companyController.signup);

/**
 * @swagger
 * /api/company/login:
 *   post:
 *     summary: Login as a company
 *     tags:
 *       - Company
 *     responses:
 *       200:
 *         description: Company login successful
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
route.post("/company/login", companyController.companyLogin);

module.exports = route;