const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const user=require("../../mongoDb/models/userSchema");
const mongoose=require("mongoose")


const getUser = async (req,res) => {
    const allUsers=await user.find({});
    if(!allUsers){
        res.status(400).json("user not found")
    }else{
        res.status(200).json(allUsers)
    }
};


const getUserById = async (req,res) => {
    const {id}=req.params;
    if(id){
        const getIdData=await user.findById(id)
        res.status(200).json(getIdData)
    }
    else{
        res.status(400).json("this data is not valid")
    }
}


const postUser = async (req,res) => {

    const {userName,emailId,password}= req.body;
    console.log(req.body);
    if(!userName,!emailId,!password){
        console.log("user is not found");
        return res.status(201).json("some fields are mandatory");
    }
    const uservlid = await user.findOne({emailId});
    if(uservlid){
        console.log("user already registered");
        res.status(201).json("user already registered");
    }
    else{
        const hashPassword= await bcrypt.hash(password,10);
        const User = await user.create({
            userName,
            emailId,
            password:hashPassword
        })
        const token=jwt.sign(
            {id:user._id,emailId},process.env.MY_SECRET,
            {expiresIn:"10h"}
            )
        User.token=token,
        User.password=undefined
        res.status(200).json(User);
    };

};


const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { productID } = req.body;
        console.log(req.body);
        // console.log(id, productID);

        if (id && productID) {
            const objectId= new mongoose.Types.ObjectId(productID) 
            console.log(typeof objectId);

            const userDocument = await user.findOne({ _id: id });

            if (!userDocument) {
                return res.status(404).json("User not found");
            }
            userDocument.cart.push(objectId);
            await userDocument.save();

            res.status(200).json(userDocument);
            // console.log(userDocument);
        } 

        // else if(id , req.body){
        //     console.log(id,req.body);
        // }


        else {
            res.status(400).json("Invalid data");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
};






const deleteUser=()=>{
    

}

const getCart=async (req,res)=>{
    const {id}=req.params
    console.log(id);
    
    const userData = await user.findOne({ _id: new mongoose.Types.ObjectId(id) });
    const Data = await user.aggregate([
        {
            $match: {
                _id: userData._id,
            },
        },
        {
          $lookup: {
            from: "products",
            localField: "cart",
            foreignField: "_id",
            as: "userCart",
          },
        },
      ]);
      
      const userCart = [].concat(...Data?.flat().map(Data => Data.userCart));
      res.status(200).json(userCart);
      
}

module.exports={
    getUser,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    getCart
}





