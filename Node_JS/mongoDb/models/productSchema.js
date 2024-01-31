const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const productSchema= new Schema({

    ProductName :{
        type:String,
        required:null
    },
    Quantity :{
        type:Number,
        required:null
    },
    mrp :{
        type:Number,
        required:null
    },
    discount:{
        type:Number,
        required:null
    },
    Fetures :{
        type:String,
        required:null
    },
    Description :{
        type:String,
        required:null
    },
    categoryName:{
        type:String
    },
    categoryId:{
       type:mongoose.ObjectId
    },
    images:[String],
    

},{
    timestamps:true,
})

module.exports=mongoose.model("product",productSchema)