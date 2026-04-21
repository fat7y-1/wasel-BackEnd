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

const getDriverByOrderId = async (req, res) => {}

module.exports = {
  createDriver,
  getDriverByOrderId,
}
