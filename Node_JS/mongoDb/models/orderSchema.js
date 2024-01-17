const mongoose=require("mongoose")



const orderSchema=mongoose.Schema({

    cartData:[],
    userId:String,
    totalAmount:Number,
    status:{type: String, default: "pending"},
    shippingAddress:Object,
    billingAddress:Object,
    userName:String

},{
    timestamps:true
})

module.exports=mongoose.model("order",orderSchema)