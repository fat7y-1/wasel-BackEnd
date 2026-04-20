const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3000

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const db = require("./db")

const authRouter = require("./routes/authRouter")
const restaurantRouter = require("./routes/restaurantRouter")
const foodRouter = require("./routes/foodRouter")
const orderRouter = require("./routes/orderRouter")

const app = express()
app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use("/", (req, res) => {
//   res.send(`Connected!`)
// })
app.use("/auth", authRouter)
app.use("/restaurant", restaurantRouter)
app.use("/food", foodRouter)
app.use("/order", orderRouter)

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
