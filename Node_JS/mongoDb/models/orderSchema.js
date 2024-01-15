const mongoose=require("mongoose")



const orderSchema=mongoose.Schema({

    cartData:[],
    userId:String,
    totalAmount:Number,

},{
    timestamps:true
})

module.exports=mongoose.model("order",orderSchema)