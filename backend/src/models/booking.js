const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookingschema = new schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trip",
      required: true,
    },
    seats: {
      type: [Number],
    },
    passengers: [
      {
        name: {
          type: String,
          required : true,
        },
        age: {
          type: String,
          required: true,
          min: 1
        },
        gender: {
          type: String,
          enum: ["male", "female", "others"],
          
        },
        seatNumber: {
          type: Number,
          required : true
        }
      }

    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    bookingReference: {
      type: String,
      required: true,
      unique: true,
    },
    bookingStatus: {
      type: String,
      enum: ["confirmed", "pending", "cancelled"],
      required: true,
    },
  },
  { timestamps: true },
);
const bookingModel = mongoose.model("booking", bookingschema);
module.exports = bookingModel;
