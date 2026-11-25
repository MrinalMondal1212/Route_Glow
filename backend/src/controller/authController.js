const userModel = require("../models/user");
const statuscode = require("../utils/statuscode");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class userController {
  async signup(req, res) {
    try {
      const { name, email, phone, password } = req.body;

      // Check required fields
      if (!name || !email || !phone || !password) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "All fields are required",
        });
      }

      // Check existing email
      const existing = await userModel.findOne({ email });

      if (existing) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "User already exists",
        });
      }

      // Hash password
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const data = new userModel({
        name,
        email,
        phone,
        password: hashedPassword,
        role: "user",
      });

      const result = await data.save();

      return res.status(statuscode.CREATED).json({
        success: true,
        message: "User created successfully",
        data: {
          id: result._id,
          name: result.name,
          email: result.email,
          phone: result.phone,
          role: result.role,
        },
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
       return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "User is not found",
        });
      }
      //compare password
      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
       return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Password is not same",
        });
      }
      //token jeneration
      const token =  jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1d" },
      );
      res.status(statuscode.OK).json({
        success: true,
        message: "login successfull",
        data: {
          id: user._id,
          email: user.email,
        },
        token: token,
      });
    } catch (error) {
     return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new userController();
