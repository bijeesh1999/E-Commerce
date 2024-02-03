const mongoose=require("mongoose");
require('dotenv').config()

const dbConnection= async ()=>{
    try{
        await mongoose.connect(process.env.MY_MONGODB)
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports = dbConnection;