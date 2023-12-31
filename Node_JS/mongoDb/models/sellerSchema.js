const mongoose=require("mongoose");


const sellerSchema=mongoose.Schema({

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
    token:{
        type:String,
        require:null
    }

},{
    timestamps:true
})

module.exports=mongoose.model("seller",sellerSchema)