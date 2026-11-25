const userModel = require("../models/user");
const statuscode = require("../utils/statuscode");

class adminController {
  async getpendingCompanies(req, res) {
    try {
      const companies = await userModel
        .find({
          role: "company",
          companyStatus: "pending",
        })
        .select("-password");
      return res.status(statuscode.OK).json({
        success: true,
        message: "All pending companies are showing here !!",
        data: companies,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // approve companies
  async approveCompanies(req, res) {
    try {
      const { id } = req.params;
      const approved = await userModel.findOneAndUpdate(
        { _id: id, role: "company", companyStatus: "pending" },
        { companyStatus: "approved" },
        { new: true },
      ).select("-password");
      if (!approved) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Pending company not found",
        });
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "Status change pending to approved",
        data: approved,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // reject companies
  async rejectCompanies(req, res) {
    try {
      const { id } = req.params;
      const reject = await userModel.findOneAndUpdate(
        { _id: id, role: "company", companyStatus: "approved" },
        { companyStatus: "rejected" },
        { new: true },
      ).select("-password");
      if (!reject) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Pending company not found",
        });
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "Status change  approved to rejected",
        data: reject,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new adminController();
