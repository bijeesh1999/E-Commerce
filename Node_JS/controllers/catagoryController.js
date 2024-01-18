const category=require("../mongoDb/models/categorySchema")


const getAllCategogy= async (req,res)=>{
    const allCategogy=await category.find({});
    res.status(200).json(allCategogy)
}

const createCategogy= async (req,res)=>{

    const {categoryName}=req.body;
    console.log(categoryName);
    if(!categoryName){
        res.status(400).json("failed to create category")
    }
    else{
        const newCategory=await category.create({
            categoryName
        })
        res.status(200).json(newCategory)
    }
}

const getOneCategogyById= async (req,res)=>{

    const {id}=req.params;
    try {
        if(!id){
            res.status(400).json("id is not found")
        }else{
            const categoryDataById=await category.findById(id);
            res.status(200).json(categoryDataById)
        }
        
    } catch (error) {
        res.status(500).json(error,"server error ")
    }

}

const updateCategogyById= async (req,res)=>{

    const {id}=req.params;
    const {categoryName} = (req.body);
    // console.log(id,categoryName);
    try {
      if(!id){
        res.status(400).json("id is not found")
      }else{
        let categoryById=await category.findByIdAndUpdate(id,{categoryName})
        res.status(200).json(categoryById)
        console.log(categoryById);
      }
    }catch(error){
        res.status(500).json("server Error")
    }
      

}

const deleteCategogyById= async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    if(!id){
        res.status(400).json("id is not found")
      }else{
        let deleteById=await category.findByIdAndDelete(id);
        res.status(200).json(deleteById)
      }

}


module.exports={   
    getAllCategogy,
    createCategogy,
    getOneCategogyById,
    updateCategogyById,
    deleteCategogyById,
}