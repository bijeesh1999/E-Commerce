const express=require("express");
const Router=express.Router();

const { getSeller , postSeller , getSellerById , updateSeller , deleteSeller} = require("../controllers/users/sellerRegister");
const sellerLogin=require("../controllers/users/sellerLogin")



Router.route("/").get(getSeller);
Router.route("/register").post(postSeller)
Router.route("/login").post(sellerLogin)
Router.route("/:id").get(getSellerById).put(updateSeller).delete(deleteSeller)


module.exports=Router;

