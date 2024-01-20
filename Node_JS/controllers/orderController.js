const order = require ("../mongoDb/models/orderSchema");
const { db } = require("../mongoDb/models/productSchema");


const getAllOrder=async (req,res) => {

    const allOrder=await order.find({});
    if(allOrder){
        res.status(200).json(allOrder)
    }

}

const getOneOrder= async (req,res) => {
    const {id}=req.params;
    // console.log(id);
    if(id){
        const singleOrder=await order.findById(id);
        if(singleOrder){
            res.status(200).json(singleOrder)
        }
    }
}


const getOrderByUser= async (req,res) => {

    const {id}=req.params;
    console.log(id);

    const result=await order.aggregate([
        { $match: { userId: id } },
      ])

      res.status(200).json(result)

}

module.exports={getAllOrder , getOneOrder, getOrderByUser}