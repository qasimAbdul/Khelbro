require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./Routes/router")
const DB = require("./db/conn")
const PORT = 4002


DB()

// middleware
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(PORT, ()=>{
    console.log(`Server start at port No :${PORT}`);
})