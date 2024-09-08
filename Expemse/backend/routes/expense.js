const express = require("express")
const { add_expense,get_expense } = require("../controller/expense")

const route = express.Router()

route.post("/add_expense",add_expense)
route.get("/get_expense",get_expense)

module.exports = route