const mongoose = require("mongoose")
const DriverSchema = new mongoose.Schema(
  {
    driverName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Driver", DriverSchema)
