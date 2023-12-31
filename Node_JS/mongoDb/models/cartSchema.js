const mongoose=require("mongoose");


const cartSchema=mongoose.Schema({

    userId:{
        // type:mongoose.ObjectId,
        type:String,
    },
    productId:{
        // type:mongoose.ObjectId,
        type:String,
    },
    quantity:{
        type:Number,
    }

},{
    timestamps:true
});


module.exports=mongoose.model("cart",cartSchema)