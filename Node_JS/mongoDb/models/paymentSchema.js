const mongoose=require("mongoose");


const paymentSchema=mongoose.Schema({
    paymentID:String,
    orderID:String,
    status:{type: String, default: "pending"}
},{
    timestamps:true
})

module.exports=mongoose.model("payProduct",paymentSchema)
