const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const user=require("../../mongoDb/models/userSchema")


const userLogin = async (req,res) => {

    const {emailId,password}= await req.body;
    if(!(emailId,password)){

        res.status(201).json("emailid and passwod is required")

    }
    const userValid = await user.findOne({emailId});
    // console.log(userValid);

    if(userValid && await bcrypt.compare(password,userValid.password)){
        const token=jwt.sign(
            {id:user._id,emailId},process.env.MY_SECRET,
            {expiresIn:"10h"}
        )
        userValid.token=token;
        userValid.password=undefined;
        const options = {
            expires:new Date(Date.now() + 10 * 60 * 60 * 1000 ),
            httpOnly: true,
          }
          res.status(200).cookie("token",token,options).json({
            success:true,
            token,
            userValid
          });

        //   console.log("token:",token)
        //   console.log("req.cookies",userValid)
    }
    else{
        res.status(201).json("user is not found please sign in ")
    }


}

module.exports=userLogin;