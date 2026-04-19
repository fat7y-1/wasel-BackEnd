const express = require("express")
const router = express.Router()

const restaurantController = require("../controllers/restaurantController")

router.post("/:id", restaurantController.addRestaurant)
router.delete("/:id", restaurantController.deleteRestaurant)

module.exports = router
