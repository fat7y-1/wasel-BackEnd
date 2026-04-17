const Restaurant = require("../models/Restaurant")
const addRestaurant = async (req, res) => {
  try {
    const restaurantInDB = await Restaurant.exists({ name: req.body.name })
    if (restaurantInDB) {
      return res.send("restaurant already exists!")
    } else {
      const newRestaurant = await Restaurant.create({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        type: req.body.type,
        user: req.params.id,
      })
      res.send(`Restaurant successfully added! ${newRestaurant}`)
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

module.exports = {
  addRestaurant,
}
