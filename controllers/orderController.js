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

module.exports = {
  createOrder,
}
