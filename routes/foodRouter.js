const express = require("express")
const router = express.Router()

const foodController = require("../controllers/foodController")

router.post("/:id", foodController.addFood) //restaurant id

module.exports = router
