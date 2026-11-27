const express = require("express")
const adminController = require("../controller/adminController")
const route = express.Router()
/**
 * @swagger
 * /api/admin/companies/pending:
 *   get:
 *     summary: Get all pending companies
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Pending companies retrieved successfully
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */
route.get("/admin/companies/pending", adminController.getpendingCompanies)
/**
 * @swagger
 * /api/admin/companies/{id}/approve:
 *   patch:
 *     summary: Approve a company
 *     tags:
 *       - Admin
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
 *         description: Company approved successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Company not found
 *       500:
 *         description: Internal server error
 */
route.patch("/admin/companies/:id/approve", adminController.approveCompanies)
/**
 * @swagger
 * /api/admin/companies/{id}/reject:
 *   patch:
 *     summary: Reject a company
 *     tags:
 *       - Admin
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
 *         description: Company rejected successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Company not found
 *       500:
 *         description: Internal server error
 */
route.patch("/admin/companies/:id/reject", adminController.rejectCompanies)

module.exports = route