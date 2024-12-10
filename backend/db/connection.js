// Connection.js

const mongoose = require("mongoose");


let URI = process.env.MONGO_URI ;

mongoose.connect( URI , {
    //  useNewUrlParser:true,  
    // useUnifiedTopology:true
}).then(() => {
    console.log("Connection successful with database!")
}).catch((e) => {
    console.log("Not Connected with database!")
})