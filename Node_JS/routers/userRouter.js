
const express=require("express");
const Router=express.Router();

const { getUser , getUserById , postUser , updateUser , deleteUser , getCart}=require("../controllers/users/userRegister");
const userLogin=require("../controllers/users/userLogin");

Router.route("/").get(getUser);
Router.route("/register").post(postUser);
Router.route("/login").post(userLogin);
Router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
Router.route("/cart/:id").get(getCart)


module.exports=Router;