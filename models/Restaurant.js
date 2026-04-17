const mongoose = require("mongoose")
const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String },
    location: {
      house: { type: Number },
      road: { type: Number },
      block: { type: Number },
    },
    phoneNumber: { type: Number, required: true },
    type: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Restaurant", RestaurantSchema)
