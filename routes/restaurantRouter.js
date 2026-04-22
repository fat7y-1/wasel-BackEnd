const express = require("express")
const router = express.Router()

const restaurantController = require("../controllers/restaurantController")

router.post("/", restaurantController.addRestaurant)
router.delete("/:id", restaurantController.deleteRestaurant)
router.get("/", restaurantController.getAllRestaurant)
router.put("/:id", restaurantController.updateRestaurant)
router.get("/:id", restaurantController.getOneRestaurant)
router.get("/category/:type", restaurantController.getRestaurantByType)

module.exports = router
