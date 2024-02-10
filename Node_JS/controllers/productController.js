const product = require("../mongoDb/models/productSchema");
const category = require("../mongoDb/models/categorySchema");
const mongoose=require("mongoose")

let categoryId;
const getAllProducts = async (req, res) => {
  const allProducts = await product.find({});
  res.status(200).json(allProducts);
};

const getAllCategogy = async () => {
  const allCategogy = await category.find({});
  return allCategogy;
};

// ==============================================================

const createProduct = async (req, res) => {
  try {
    const {
      ProductName,
      Quantity,
      Fetures,
      Description,
      categoryName,
      mrp,
      discount,
    } = req.body;
    const images = req.files.map((file) => file.filename);
    // console.log(images);
    // console.log(req.body)

    const productName = await getAllCategogy();

    for (let i = 0; i < productName.length; i++) {
      if (productName[i].categoryName == categoryName) {
        categoryId = productName[i]._id;
      }
    }

    if ((!ProductName, !Quantity, !Fetures, !Description, !mrp, !discount)) {
      res.status(400).json("All fields are mandatory");
    } else {
      const newProduct = await product.create({
        ProductName,
        Quantity,
        Fetures,
        Description,
        categoryName,
        mrp,
        discount,
        categoryId: categoryId,
        images: images,
      });

      res.send(newProduct);
      console.log(newProduct);
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" + error });
  }
};

// ===============================================

const getOneProductById = async (req, res) => {
  try {
  let {id} = req.params;
  // console.log("productId:",id);
    if (id) {
      let idData = await product.findById(id);
      res.status(200).json(idData);
    } else {
      return res.status(404).json({ message: "Cannot find programmer" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


// ==========================================================================================================


const updateProductById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { ...data } = req.body;
  console.log(req.files);
  console.log(req.body);
  console.log(id);
  let newImg;

  if(req.files){
    newImg = req.files.map(file => file.filename);
  }

  try{

    const oldImg=await product.findById(id);
    let oldimgs=oldImg.images.map((data)=>data)
    // console.log(oldImg);
  
    const productName = await getAllCategogy();
    // console.log(productName);
  
    for (let i = 0 ; i<productName.length; i++){
      if(productName[i].categoryName == data.categoryName){
        categoryId=productName[i]._id.toString();
        console.log(categoryId);
        break;
      }
    }
  
      let putProductById;
      if (!req.files || req.files.length <= 0 ) {
        // console.log(" without images");
  
        putProductById = await product.findByIdAndUpdate(id, {
          ...data,
          images:oldimgs,
          categoryId:categoryId
        } );
        res.status(200).json(putProductById);
        // console.log(putProductById);
  
      }else {
        console.log("with images");
        let newData={
          ...data,
          images:newImg,
          categoryId:categoryId
        }
        // console.log(newData);
        putProductById = await product.findByIdAndUpdate(id, newData );
        res.status(200).json(putProductById);
  
      }

  }catch(error){
    console.log("error");
  }
};


// ============================================================================================================
// using fs file system to delete images from the uploads

const deleteProductsById = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  try {
    const deleteData = await product.findByIdAndDelete(id);
    if (deleteData) {
      res.status(200).json("data deleted sucessfully");
    } else {
      res.status(400).json("id not fount");
    }
  } catch (err) {
    res.status(500).json("server error");
  }
};

const getProductsByCategory = async (req,res) => {
  const id=new mongoose.Types.ObjectId(req.params.id)
  console.log(id);
  let data= await product.aggregate([
    {
        $match: {
            'categoryId': id
        }
    }
]);
console.log(data);
res.status(200).json(data)
}

module.exports = {
  getAllProducts,
  createProduct,
  getOneProductById,
  updateProductById,
  deleteProductsById,
  getProductsByCategory
};
