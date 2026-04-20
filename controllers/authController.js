const User = require("../models/User")
const middleware = require("../middleware")

const registerUser = async (req, res) => {
  try {
    const userInDB = await User.exists({ username: req.body.username })
    if (userInDB) {
      return res.send("email already taken!")
    } else {
      if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).send("Password and Confirm Password must match ")
      }
      // const hashedPassword = await bcrypt.hash(req.body.password, 12)

      // JWT auth don't forget to put SALT AND APP_SECRET ON ENV
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

const signIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res
        .status(401)
        .send({ status: "Error", msg: "Invalid Email or Password" })
    }

    let matched = await middleware.comparePassword(
      req.body.password,
      user.password
    )

    if (matched) {
      let payload = {
        id: user._id,
        username: user.username,
        email: user.email,
      }
      let token = middleware.createToken(payload)
      let userData = {
        username: user.username,
        email: user.email,
        id: user._id,
      }
      return res.send({ user: userData, token })
    } else {
      res
        .status(401)
        .send({ status: "Error", msg: "Invalid Email or Password" })
    }
    // console.log("signed in!")
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "An error has occurred!" })
  }
}

module.exports = {
  registerUser,
  signIn,
}
