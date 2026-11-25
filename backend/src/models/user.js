const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "company", "admin"],
      default: "user",
    },
    //for company 
    companyStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default : "pending"
    },
    companyName: {
      type: String,
      
    },
    registrationNumber: {
      type : String
    }
  },
  { timestamps: true },
);
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
