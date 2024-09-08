const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors") 
const express = require("express")
const databaseConnection = require("./connection/connection")
const route  = require("./routes/expense")
const app = express()

app.use(express.json())
app.use(cors())
databaseConnection()
app.use("/expense",route)

app.listen(process.env.PORT,() =>{
    console.log(`Server listening at ${process.env.PORT}`)
})