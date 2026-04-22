const Order = require("../models/Order")
const Driver = require("../models/Driver")
const Food = require("../models/Food")

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
  }
}

const getAllOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id })
      .populate("food.foodItem")
      .populate("driver")

    //   .populate({
    //     path: "food.foodItem",
    //   })
    // console.log(orders)
    // return res.json(orders)
    // let orderDetails = [
    //   {
    //     order: {},
    //     driver: {},
    //     food: {},
    //   },
    // ]
    // let driver
    // let foodItem = [{}]

    // for (let i = 0; i < orders.length; i++) {
    //   if (orders[i].delivery) {
    //     driver = await Driver.findOne({ _id: orders[i].driver })
    //   }
    //   for (let j = 0; j < orders[i].food.length; j++) {
    //     foodItem[j] = await Food.findOne({ _id: orders.food[j].foodItem })
    //   }
    //   orderDetails[i] = {
    //     order: orders[i],
    //     driver: driver,
    //     food: foodItem,
    //   }
    //   foodItem = []
    // }
      .populate({
        path: "food.foodItem",
      })

    res.send(orders)
  } catch (error) {
    console.log(`Error: ${error}`)
    res.status(500).json({ err: error.message })
  }
}

module.exports = {
  createOrder,
  deleteOrder,
  updateOrder,
  getAllOrdersByUserId,
}
