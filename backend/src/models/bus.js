const mongoose = require("mongoose");
const schema = mongoose.Schema;

const busSchema = new schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    busName: {
      type: String,
      required: true,
    },
    busNumber: {
      type: String,
      required: true,
    },
    busType: {
      type: String,
      enum: ["Seater", "Sleeper", "Semi-Sleeper"],
      required: true,
    },
    category: {
      type: String,
      enum: ["AC", "NON AC"],
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    photos: {
      type: [String],
      default: [],
    },
    isDeleted: {
      type: Boolean,
      default : false
    }
  },
  { timestamps: true },
);
const busModel = mongoose.model("bus", busSchema);
module.exports = busModel;
