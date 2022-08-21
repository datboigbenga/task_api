const mongoose = require("mongoose")

// const connectionstring = "mongodb://localhost:27017/tasks"

// mongoose.connect(connectionstring)
// .then(()=>{console.log("database connected successfuly")})
// .catch((err)=>{ console.log("unsuccessfull connection")})

const connectdb = (url)=>{
    return mongoose.connect(url)
}

module.exports = connectdb