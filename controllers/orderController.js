const Order = require("../models/Order")
const Driver = require("../models/Driver")

const createOrder = async (req, res) => {
  try {
    let driver
    let randomDriver
    if (req.body.delivery) {
      driver = await Driver.find({})
      randomDriver = driver[Math.floor(Math.random() * driver.length)]
    }
    const newOrder = await Order.create({
      totalPrice: req.body.totalPrice,
      food: req.body.food,
      delivery: req.body.delivery,
      user: req.params.id,
      driver: randomDriver,
    })
    console.log(driver)
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
    if (deleteOrder === null) {
      res.send(`this order does not exist i the db`)
    } else {
      res.send(`deletedOrder: ${deletedOrder}`)
    }
  } catch (error) {
    res.send(`Error: ${error}`)
  }
}
<<<<<<< HEAD

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" })
    }

    res.status(200).json(updatedOrder)
  } catch (error) {
    res.status(500).json({ error: error.message })
=======
const getAllOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id })
    res.send(orders)
  } catch (error) {
    console.log(`Error: ${error}`)
>>>>>>> 33e41cf6eb09fbf30c2bd3bbf9fa6ffbf9fa43aa
  }
}
module.exports = {
  createOrder,
  deleteOrder,
<<<<<<< HEAD
  updateOrder,
=======
  getAllOrdersByUserId,
>>>>>>> 33e41cf6eb09fbf30c2bd3bbf9fa6ffbf9fa43aa
}
