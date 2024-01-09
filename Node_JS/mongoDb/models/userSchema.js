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
    billingAddress:{
        type:String,
        required:null
    },
    shippingAddress:{
        type:String,
        required:null
    },
    cart:[],
    token:{
        type:String,
        required:null
    }

},{
    timestamps:true
})

module.exports=mongoose.model("user",userSchema)