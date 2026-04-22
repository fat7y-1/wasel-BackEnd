const express = require("express")
const router = express.Router()

const driverController = require("../controllers/driverController")

router.post("/", driverController.createDriver)
router.get("/", driverController.getAllDrivers)
router.delete("/:id", driverController.deleteDriverById)

module.exports = router
