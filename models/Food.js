const mongoose = require("mongoose")
const FoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String }, //, required: true },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    bill: { type: Number },
    quantity: { type: Number },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Food", FoodSchema)
