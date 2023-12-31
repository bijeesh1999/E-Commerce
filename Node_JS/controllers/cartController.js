const cart=require("../mongoDb/models/cartSchema");


const getAllCartData= async (req,res)=>{

    const allcartData= await cart.find({});
    if(!allcartData){
        res.status(400).json("no data found")
    }
    else{
        res.status(200).json(allcartData)
    }
}


const postCartData= async (req,res)=>{
    try{
        const {userId,productId,quantity}=req.body;
        console.log(userId,productId,quantity);
        if(!userId,!productId,!quantity){
            res.status(400).json("all filelds are mandatory");
        }else{
            const newCartData=await cart.create({
                userId,productId,quantity
            });
            res.status(200).send(newCartData)
        }
    }catch(error){
        res.status(500).send(error)
    }  
}



const putCartDataById= async (req,res)=>{
    try{
        const {id}=req.params;
        console.log(id,req.body);
        if(!id || !req.body){
            res.status(400).json("some fields are mandatory")
        }else{
            let updateData=await cart.findByIdAndUpdate(id,req.body);
            if (!updateData) {
                res.status(404).json("Cart not found");
                return;
            }
            res.status(200).json(updateData);
        }
    }catch(errorr){
        res.status(500).json("server error")
    }  
}

const deleteCartData= async (req,res)=>{

    const {id}=req.params;
    if(id){
        const response=await cart.findByIdAndDelete(id)
        res.status(200).json(response)
    }
    else{
        res.status(400).json("id is not valid")
    }
        
    
}

module.exports={getAllCartData,postCartData,putCartDataById,deleteCartData};