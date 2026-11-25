const userModel = require("../models/user");
const statuscode = require("../utils/statuscode");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class companyController {
  async signup(req, res) {
    try {
      const { companyName, registrationNumber, email, password } = req.body;
      if (!companyName || !registrationNumber || !email || !password) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }
      //check existing
      const existing = await userModel.findOne({ email });
      if (existing) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "email already exist",
        });
      }
      //hash password
      const salt = 10;
      const hashed = await bcrypt.hash(password, salt);
      // create company
      const data = new userModel({
        companyName,
        email,
        password: hashed,
        registrationNumber,
        role: "company",
        companyStatus: "pending",
      });
      const result = await data.save();

      return res.status(statuscode.CREATED).json({
        success: true,
        message: "Company registered successfully. Awaiting admin approval.",
        data: {
          id: result._id,
          companyName: result.companyName,
          email: result.email,
          role: result.role,
          registrationNumber: registrationNumber,
          companyStatus: result.companyStatus,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // login company after the approval of admin
  async companyLogin(req, res) {
    try {
      const { email, password } = req.body;
      const existing = await userModel.findOne({ email, role: "company" });
      if (!existing) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Comapny not found",
        });
      }
      //compare password
      const compare = await bcrypt.compare(password, existing.password);
      if (!compare) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Invalid credentials",
        });
      }
      if (existing.companyStatus === "pending") {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Your company account is awaiting admin approval",
        });
      }
      if (existing.companyStatus === "rejected") {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Your company registration is rejected by admin",
        });
      }
      //token generation
      const token = jwt.sign(
        {
          id: existing._id,
          email: email,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" },
      );

      return res.status(statuscode.OK).json({
        success: true,
        message: "Company Login successfull......",
        data: {
          id: existing._id,
          email: email,
        },
        token: token,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server errror",
      });
    }
  }
}
module.exports = new companyController();
