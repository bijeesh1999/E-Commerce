const product=require("../mongoDb/models/productSchema");
const category=require("../mongoDb/models/categorySchema");


let categoryId;
const getAllProducts= async (req,res)=>{

    const allProducts=await product.find({});
    res.status(200).json(allProducts)

};

const getAllCategogy= async ()=>{
  const allCategogy=await category.find({});
  return allCategogy;
};

// ==============================================================

const createProduct = async (req, res) => {
    try {
      const { ProductName,Quantity,Fetures,Description,categoryName,mrp,discount } = req.body;
      const images = req.files.map(file => file.filename);
      // console.log(images);
      // console.log(req.body)

      const productName = await getAllCategogy();

    for(let i=0;i<productName.length;i++){
      if(productName[i].categoryName == categoryName){
        categoryId=productName[i]._id;
      }
    }
   
      if (!ProductName,!Quantity,!Fetures,!Description,!mrp,!discount) {
        res.status(400).json("All fields are mandatory");
      }
      else {

        const newProduct = await product.create({
          ProductName,Quantity,Fetures,Description,categoryName,mrp,discount,
          categoryId:categoryId,
          images:images,
        });

        res.send(newProduct);
        console.log(newProduct);
      }
    }
     catch (error) {
      res.status(500).json({ error: "Server error" + error });
    }
  };
  

// ===============================================


const getOneProductById=async (req,res)=>{
    let {id} = req.params;
    try {
        if(id){
            let idData = await product.findById(id) ;
            res.status(200).json(idData) 
        }
        else{ 
            return res.status(404).json({ message: 'Cannot find programmer' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

};



const updateProductById= async(req,res)=>{
  const {id}=req.params;
  const {...data}=req.body;
  const images = req.files.map(file => file.filename);

  const oldImg=await product.findById(id);
  let oldimgs=oldImg.images.map((data)=>data)

    let putProductById;
    if (!req.files || req.files.length <= 0 ) {

      putProductById = await product.findByIdAndUpdate(id, {
        data,
        images:oldimgs
      } );

    }else {
      let newData={
        data,images
      }
      putProductById = await product.findByIdAndUpdate(id, newData );
    }

    res.status(200).json(putProductById);

    
}


// using fs file system to delete images from the uploads

const deleteProductsById= async (req,res)=>{
    let {id}=req.params;
    console.log(id);
    try{
        const deleteData=await product.findByIdAndDelete(id);
        if(deleteData){
            res.status(200).json("data deleted sucessfully")
        }
        else{
            res.status(400).json("id not fount")
        }
    }
    catch(err){
        res.status(500).json("server error")
    }
}


module.exports={
    getAllProducts,
    createProduct,
    getOneProductById,
    updateProductById,
    deleteProductsById,
}