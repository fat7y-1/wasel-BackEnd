const express = require("express")
const router = express.Router()

const restaurantController = require("../controllers/restaurantController")

router.post("/", restaurantController.addRestaurant)
router.delete("/:id", restaurantController.deleteRestaurant)
router.get("/", restaurantController.getAllRestaurant)

module.exports = router
// MONGODB_URI=mongodb+srv://masooe99_db_user:Jw6OFvUs2NQsJN4C@cluster0.ihv24dd.mongodb.net/jwt-auth

// SALT_ROUNDS=12
// APP_SECRET=taco
