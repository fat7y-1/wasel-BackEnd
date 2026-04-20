const Food = require("../models/Food")

const addFood = async (req, res) => {
  try {
    const foodInDB = await Food.exists({ name: req.body.name })
    if (foodInDB) {
      return res.send("This menu item already exists!")
    } else {
      const newFood = await Food.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        restaurant: req.params.id,
      })
      res.send(newFood)
    }
  } catch (error) {
    res.send(`error: ${error}`)
  }
}
const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find({ restaurant: req.params.id })
    res.send(foods)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}
const deleteFood = async (req, res) => {
  try {
    const deleteFood = await Food.findByIdAndDelete({
      _id: req.params.id,
    })
    res.send(`deleteFood: ${deleteFood}`)
  } catch (error) {
    res.send(`Error: ${error}`)
  }
}

module.exports = {
  addFood,
  getAllFood,
  deleteFood,
}
