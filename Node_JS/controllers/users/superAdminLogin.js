const express=require("express")
const bcrypt = require('bcrypt');
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken");
require("dotenv").config();
const admin=require("../../mongoDb/models/superAdminSchema")

const adminLogin = async (req, res) => {
    try {
        const { emailId, password } = req.body;
        console.log(emailId , password);

        if (!(emailId && password)) {
            res.status(400).json("emailId and password are required");
            return;
        }
        const adminValid = await admin.findOne({emailId});
                if (!adminValid) {
            res.status(201).json("Admin not found");
            return;
        }

        const passValid=await bcrypt.compare(password, adminValid.password)

        if(!passValid){
            res.status(201).json("Password is incorrect");
            return;
        }else{

            const token = jwt.sign(
                { id:adminValid._id , emailId },
                process.env.MY_SECRET,
                { expiresIn: "10h" }
            )        
            adminValid.token=token;
            adminValid.password=undefined;
            const options = {
                expires:new Date(Date.now() + 10 * 60 * 60 * 1000 ),
                httpOnly: false,
            }
            res.status(200).cookie("token",token,options).json({
                success:true,
                token,
                adminValid
            });

        }

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};



module.exports={adminLogin}