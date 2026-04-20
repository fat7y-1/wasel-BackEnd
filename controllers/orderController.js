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
const getAllOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id })
    res.send(orders)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
module.exports = {
  createOrder,
  deleteOrder,
  getAllOrdersByUserId,
}
