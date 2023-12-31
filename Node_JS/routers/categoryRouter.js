const express=require("express")
const Router=express.Router();

const {getAllCategogy,createCategogy,getOneCategogyById,updateCategogyById,deleteCategogyById,}=require("../controllers/catagoryController");


Router.route("/").get(getAllCategogy).post(createCategogy);
Router.route("/:id").get(getOneCategogyById).put(updateCategogyById).delete(deleteCategogyById);


module.exports=Router
