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

const getAllDrivers = async (req, res) => {
  try {
    const allDrivers = await Driver.find({})
    res.send(allDrivers)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}

const deleteDriverById = async (req, res) => {
  try {
    const deletedDriver = await Driver.findOneAndDelete({ _id: req.params.id })
    res.send(deletedDriver)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}

module.exports = {
  createDriver,
  getAllDrivers,
  deleteDriverById,
}
