require("dotenv").config()

const express = require("express")
const dbcon = require("./config/dbcon")
dbcon()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



const user = require("./route/authroute")
app.use("/api", user)


const company = require("./route/companyRoute")
app.use("/api", company)

const admin = require("./route/adminroute")
app.use("/api", admin)


// bus route
const bus = require("./route/busRoute")
app.use("/api", bus)

//trip 
const trip = require("./route/triproute")
app.use("/api", trip)

const port = process.env.PORT || 3009
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}` )
})

module.exports = app