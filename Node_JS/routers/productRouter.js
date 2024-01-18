const express=require("express");
const multer=require("multer");
const Router=express.Router();
const storage=require("../controllers/middleWares/multerMiddleware")

const {getAllProducts,createProduct,getOneProductById,updateProductById,deleteProductsById,getAllCategogy}=require("../controllers/productController");

const upload=multer({storage:storage}).array("images");


Router.route("/")
  .get(getAllProducts)
  .post(upload, createProduct)
Router.route("/:id")
  .get(getOneProductById)
  .put(upload , updateProductById)
  .delete(deleteProductsById)



module.exports=Router;