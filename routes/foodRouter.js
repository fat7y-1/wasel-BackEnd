const express = require("express")
const router = express.Router()

const foodController = require("../controllers/foodController")

router.post("/:id", foodController.addFood) //restaurant id
router.get("/:id", foodController.getAllFood)
router.delete("/:id", foodController.deleteFood)
router.put("/:id", foodController.updateFood)
router.get("/oneFood/:id", foodController.getOneFood)

module.exports = router
