const Restaurant = require("../models/Restaurant")
const addRestaurant = async (req, res) => {
  try {
    const restaurantInDB = await Restaurant.exists({ name: req.body.name })
    if (restaurantInDB) {
      return res.send("restaurant already exists!")
    } else {
      const newRestaurant = await Restaurant.create({
        name: req.body.name,
        location: req.body.location,
        logo: req.body.logo,
        phoneNumber: req.body.phoneNumber,
        type: req.body.type,
        // user: req.params.id,
      })
      res.send(newRestaurant)
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
const deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete({
      _id: req.params.id,
    })
    res.send(`deletedRestaurant: ${deletedRestaurant}`)
  } catch (error) {
    res.send(`Error: ${error}`)
  }
}

const getAllRestaurant = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({})
    res.send(restaurants)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    )

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" })
    }

    res.status(200).json(updatedRestaurant)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

const getOneRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" })
    }
    res.status(200).json(restaurant)
  } catch (error) {
    console.error(`Error: ${error}`)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

module.exports = {
  addRestaurant,
  deleteRestaurant,
  getAllRestaurant,
  updateRestaurant,
  getOneRestaurant,
}
