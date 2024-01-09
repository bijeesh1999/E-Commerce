const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const user=require("../../mongoDb/models/userSchema");


const getUser = async (req,res) => {
    const allUsers=await user.find({});
    if(!allUsers){
        res.status(400).json("sellers not found")
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
        res.status(400).json("user is not found");
    }
    const uservlid = await user.findOne({emailId});
    if(uservlid){
        return res.status(401).json("user already registered plese use anotheer id");
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
        res.status(201).json(User);
    };

};


const updateUser=()=>{

}

const deleteUser=()=>{

}

module.exports={
    getUser,
    getUserById,
    postUser,
    updateUser,
    deleteUser
}





