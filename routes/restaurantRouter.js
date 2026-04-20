const express = require("express")
const router = express.Router()

const restaurantController = require("../controllers/restaurantController")

router.post("/", restaurantController.addRestaurant)
router.delete("/:id", restaurantController.deleteRestaurant)
router.get("/", restaurantController.getAllRestaurant)

module.exports = router
