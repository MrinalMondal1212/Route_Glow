const mongoose = require("mongoose")
const schema = mongoose.Schema


const tripSchema = new schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required : true
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bus",
    required : true,
  },
  departureDateTime: {
    type: Date,
    required: true,
  },
  arrivalDateTime: {
    type: Date,
    required : true
  },
  fare: {
    type: Number,
    required: true,
    min : 1
  },
  availableSeats: {
    type: Number,
    required: true,
    min : 0
  },
  isActive: {
    type: Boolean,
    default : true
  },
  isDeleted: {
    type: Boolean,
    default : false
  }

}, { timestamps: true })

const tripModel = mongoose.model("trip", tripSchema)
module.exports = tripModel