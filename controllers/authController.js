const bcrypt = require("bcrypt")
const User = require("../models/User")

const registerUser = async (req, res) => {
  try {
    const userInDB = await User.exists({ email: req.body.email })
    if (userInDB) {
      return res.send("email already taken!")
    } else {
      if (req.body.password !== req.body.confirmPassword) {
        return res.send("Password and Confirm Password must match ")
      }
      // const hashedPassword = await bcrypt.hash(req.body.password, 12)

      // JWT auth dont forget to put SALT AND APP_SECRET ON ENV
      let passwordDigest = await middleware.hashPassword(req.body.password)

      let boolAdmin
      if (req.body.admin === true) {
        boolAdmin = req.body.admin
      } else {
        boolAdmin = false
      }

      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: passwordDigest,
        admin: boolAdmin,
      })
      res.send(`user successfully registered! ${newUser}`)
    }
  } catch (error) {
    res.send(`error: ${error}`)
  }
}

module.exports = {
  registerUser,
}
