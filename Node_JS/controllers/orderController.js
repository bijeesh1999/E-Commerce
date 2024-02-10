const order = require ("../mongoDb/models/orderSchema");


const getAllOrder=async (req,res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) ||1;
    const {key}=req.query;
    const skip = limit * (page - 1);
    const orders = await order.find({});
    const totalPage = Math.ceil(orders.length / limit);

    // console.log(key);
    const matchDatas = [
        {
            $or: [
                { orderId: { $regex: key, $options: 'i' } },
                { userName: { $regex: key, $options: 'i' } },
                { status: { $regex: key, $options: 'i' } },
            ],
        },
    ];
    const matchConditions = matchDatas.map(matchData => ({ $match: matchData }));
    const pipeline=[{
        $facet:{
            data:[
                {$skip:skip},
                {$limit:limit},
                ...matchConditions
            ]
        }},{
       $project:{
            _id:0,order:"$data"
        }
    }]
    const allOrder=await order.aggregate(pipeline);
    if(allOrder){
        res.status(200).json({allOrder,totalPage})
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