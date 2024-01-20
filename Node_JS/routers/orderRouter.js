const express=require("express")

const Router=express.Router();

const {getAllOrder , getOneOrder, getOrderByUser}=require("../controllers/orderController")




Router.route("/").get(getAllOrder)
Router.route("/:id").get(getOneOrder)
Router.route("/userOrder/:id").get(getOrderByUser)


module.exports=Router