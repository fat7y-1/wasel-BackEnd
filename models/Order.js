const mongoose = require("mongoose")
const OrderSchema = new mongoose.Schema(
  {
    totalPrice: { type: Number, required: true },
    food: [
      {
        foodItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Food",
          required: true,
        },
        count: { type: Number, required: true },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
    delivery: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
