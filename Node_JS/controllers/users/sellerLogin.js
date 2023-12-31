const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
require("dotenv").config();
const cookieParser=require("cookie-parser")
const seller=require("../../mongoDb/models/sellerSchema");


const sellerLogin = async(req,res) =>{

    const {emailId,password}= await req.body;
    if(!(emailId,password)){
        res.status(400).json("data is required");
    }
    const sellerValid=await seller.findOne({emailId});
    console.log(sellerValid);

    if(sellerValid && await bcrypt.compare(password,sellerValid.password)){
        const token=  jwt.sign({id:seller._id,emailId},process.env.MY_SECRET,
            {expiresIn:"10h"}
            )
            sellerValid.token=token;
            sellerValid.password=undefined;
            const options = {
                expires: new Date(Date.now() + 10 * 60 * 60 * 1000),
                httpOnly: true,
              }
              res.status(200).cookie("token",token,options).json({
                success:true,
                token,
                sellerValid
              });

    }else{
        res.status(401).json("no user found please register")
    }

}

module.exports = sellerLogin