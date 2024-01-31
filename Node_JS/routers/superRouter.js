const express=require("express");
const {adminLogin}=require("../controllers/users/superAdminLogin");
const Router=express.Router();


Router.route("/login").post(adminLogin)


module.exports=Router