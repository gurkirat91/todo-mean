const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());
require('dotenv').config()


mongoose.connect('mongodb://0.0.0.0:27017/mernTest')


mongoose.connection.once('open',function (){
    console.log('Connection has been made')
}).on('error', function (error){
    console.log('Connection error.', error)
})

app.use("/", require("./routes"))

app.listen(3001, function (){
    console.log("express server is running on port 3001")
})




