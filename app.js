const connectdb = require("./database/db")
// const Task = require("./models/task")
const express = require("express")
// const tas
const router = express.Router()
require("dotenv").config()
const app = express() 
const task = require("./routes/task")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/errorhandler")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/api/task", task)

// app.all("*", (req,res)=>{
//     console.log("page does'nt exist")
//     res.status(404).json({msg: `page does'nt exist`})
// })
app.use(notFound)
app.use(errorHandlerMiddleware)
const port = 5000


const start = async()=>{
    try {
        await connectdb(process.env.Mongo_URI)
        app.listen(port, ()=>{console.log("server listening on port " + port+"...")})
    } catch (error) {
        console.log("unnable to connnect to database")
    }
}

start()