const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config();
const seller=require("../../mongoDb/models/sellerSchema");
const verify=require("../middleWares/jwtAuthToken")


const getSeller = async (req,res) => {
    const allSellers=await seller.find({});
    if(!allSellers){
        res.status(400).json("sellers not found")
    }else{
        res.status(200).json(allSellers)
    }
};


const getSellerById = async (req,res) => {
    const {id}=req.params;
    if(id){
        const getIdData=await seller.findById(id)
        res.status(200).json(getIdData)
    }
    else{
        res.status(201).json("this data is not valid")
    }
}


const postSeller = async (req,res) => {

    const {userName,emailId,password}=await req.body;
    console.log(req.body);
    if(!userName,!emailId,!password){
        res.status(201).json("seller is not found");
    }
    // const emailId=sellerData.emailId;
    const uservlid = await seller.findOne({emailId});
    if(uservlid){
        return res.status(201).json("user already registered")
    }
    else{
        const hashPassword=await bcrypt.hash(password,10);
        const Seller=await seller.create({
            userName,
            emailId,
            password:hashPassword
        })
        const token=jwt.sign(
            {id:seller._id,emailId},process.env.MY_SECRET,
            {expiresIn:"10h"}
        )
        Seller.token=token,
        Seller.password = undefined
        res.status(200).json(Seller)
    };

};


const updateSeller=()=>{

}

const deleteSeller=()=>{

}


module.exports={
    getSeller,
    getSellerById,
    postSeller,
    updateSeller,
    deleteSeller
}





