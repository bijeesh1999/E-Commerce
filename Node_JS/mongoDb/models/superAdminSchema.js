const mongoose=require("mongoose");



const adminSchema=mongoose.Schema({

    userName:String,
    emailId:String,
    password:String,
    token:String

},{
    timeStamps:true
})

module.exports=mongoose.model("admin",adminSchema)