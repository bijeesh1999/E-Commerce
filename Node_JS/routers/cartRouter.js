const express=require("express");
const Router=express.Router();
const {getAllCartData,postCartData,putCartDataById,deleteCartData,getCartDataById}=require("../controllers/cartController");



Router.route("/").get(getAllCartData).post(postCartData);

Router.route("/:id").put(putCartDataById).get(getCartDataById).delete(deleteCartData);

module.exports=Router;