const mongoose=require("mongoose");


const paymentSchema=mongoose.Schema({
    paymentID:String,
    orderID:String,
    status:String
},{
    timestamps:true
})

module.exports=mongoose.model("payProduct",paymentSchema)
