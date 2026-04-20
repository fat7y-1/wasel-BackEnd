const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController")

router.post("/sign-up", authController.registerUser)
router.post("/sign-in", authController.signIn)
router.get("/:id", authController.getUserById)

module.exports = router
