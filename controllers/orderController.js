const Order = require("../models/Order")

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body)
    const order = await Order.findById(newOrder._id).populate("food.foodItem")
    res.send(order)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete({
      _id: req.params.id,
    })
    if (deleteOrder === null) {
      res.send(`this order does not exist i the db`)
    } else {
      res.send(`deletedOrder: ${deletedOrder}`)
    }
  } catch (error) {
    res.send(`Error: ${error}`)
  }
}

module.exports = {
  createOrder,
  deleteOrder,
}
