const express = require("express")
const router = express.Router()
const middleware = require("../middleware")
const authController = require("../controllers/authController")

router.post("/sign-up", authController.registerUser)
router.post("/sign-in", authController.signIn)
router.get("/session", authController.checkSession)
module.exports = router
