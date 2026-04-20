const Driver = require("../models/Driver")

const createDriver = async (req, res) => {
  try {
    const newDriver = await Driver.create({
      driverName: req.body.driverName,
      phoneNumber: req.body.phoneNumber,
    })
    res.send(newDriver)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}
module.exports = {
  createDriver,
}
