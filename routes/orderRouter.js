const express = require("express")
const router = express.Router()

const orderController = require("../controllers/orderController")

router.post("/:id", orderController.createOrder)
router.delete("/:id", orderController.deleteOrder)
router.put("/:id", orderController.updateOrder)
router.get("/:id", orderController.getAllOrdersByUserId)

module.exports = router
