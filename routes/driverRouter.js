const express = require("express")
const router = express.Router()

const driverController = require("../controllers/driverController")

router.post("/", driverController.createDriver)
router.get("/:id", driverController.getDriverByOrderId)

module.exports = router
