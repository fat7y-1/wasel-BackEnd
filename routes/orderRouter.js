const express = require("express")
const router = express.Router()

const orderController = require("../controllers/orderController")

router.post("/:id", orderController.createOrder)
router.delete("/:id", orderController.deleteOrder)
<<<<<<< HEAD
router.put("/:id", orderController.updateOrder)
=======
router.get("/:id", orderController.getAllOrdersByUserId)
>>>>>>> 33e41cf6eb09fbf30c2bd3bbf9fa6ffbf9fa43aa

module.exports = router
