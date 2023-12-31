const mongoose=require("mongoose");


const userSchema=mongoose.Schema({

    userName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:null
    }

},{
    timestamps:true
})

module.exports=mongoose.model("user",userSchema)