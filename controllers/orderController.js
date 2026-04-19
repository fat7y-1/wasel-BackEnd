const Order = require("../models/Order")

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create({
      totalPrice: req.body.totalPrice,
      food: req.body.food,
      user: req.params.id,
    })
    res.send(newOrder)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete({
      _id: req.params.id,
    })
    res.send(`deletedOrder: ${deletedOrder}`)
  } catch (error) {
    res.send(`Error: ${error}`)
  }
}

module.exports = {
  createOrder,
  deleteOrder,
}
