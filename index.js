const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const openaiRoutes = require("./routes/routes")

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use("/openai", openaiRoutes)
app.listen(port, () => console.log(`Server started on port ${port}`))
