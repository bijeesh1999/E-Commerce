const express=require("express")

const Router=express.Router();

const {getAllOrder , getOneOrder}=require("../controllers/orderController")




Router.route("/").get(getAllOrder)
Router.route("/:id").get(getOneOrder)


module.exports=Router