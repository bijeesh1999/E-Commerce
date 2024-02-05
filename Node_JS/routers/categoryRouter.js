const express=require("express")
const Router=express.Router();

const {getAllCategory,createCategory,getOneCategoryById,updateCategoryById,deleteCategoryById,getFilterCategory}=require("../controllers/catagoryController");


Router.route("/").get(getAllCategory).post(createCategory);
Router.route("/filter").get(getFilterCategory);
Router.route("/:id").get(getOneCategoryById).put(updateCategoryById).delete(deleteCategoryById);


module.exports=Router
