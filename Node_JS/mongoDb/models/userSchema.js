const mongoose=require("mongoose");


const userSchema=mongoose.Schema({

    userName:{
        type:String,
        required:null
    },
    emailId:{
        type:String,
        required:null
    },
    password:{
        type:String,
        required:null
    },
    billingAddress:{
        type:String,
        required:null
    },
    shippingAddress:{
        type:String,
        required:null
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],    token:{
        type:String,
        required:null
    }

},{
    timestamps:true
})

module.exports=mongoose.model("user",userSchema)