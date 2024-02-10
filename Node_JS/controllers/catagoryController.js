const category=require("../mongoDb/models/categorySchema")



const getFilterCategory=async (req,res)=>{

    try {
        const page=parseInt(req.query.page)||1;
        const limit=parseInt(req.query.limit)||5;
        const skip=limit * (page-1);
        const key=req.query.key;
        const Category=await category.find({});
        // console.log(page,key,limit);
        const categoryLength=Category.map((data)=>{
            if(data.isDeleted === false){
                return data;
            }
        })
        // console.log("category:",categoryLength.length);
        const totalPage=Math.ceil(categoryLength.length / limit);


        const matchDatas = [
            {
                $or: [
                    { categoryName: { $regex: key, $options: 'i' } },
                ],
            },
        ];
        const matchConditions = matchDatas.map(matchData => ({ $match: matchData }));

        const pipeline=[{
            $facet:{
                data:[
                    {$skip:skip},
                    {$limit:limit},
                    ...matchConditions                
                ]
            }
            },{ $project: {_id:0,category:"$data"} }
        ]
        
        const allCategory=await category.aggregate(pipeline);
        if(!allCategory){
            res.status(400).json("allCategogy not found")
        }else{
           await allCategory.map((data)=>{
            const Category=data.category.map((category)=>{
                if(category.isDeleted == false){
                    return category;
                }
            })
            const filterCategory = Category.filter((item) => {if(item !== null){
                return item
            }});
            // console.log("filterCategory",filterCategory);
            res.status(200).json({filterCategory,totalPage})
        })

        }
    } catch (error) {
        console.log(error);
    }

}



// ===========================================================================



const getAllCategory= async (req,res)=>{
    try {
        const Category=await category.find({});
        
        if(!Category){
            res.status(400).json("allCategogy not found")
        }else{
            const validCategory=await Category.map((item) => {
                if(item.isDeleted === false){
                    return item;
                }
            })
            const category=validCategory.filter((item)=>{
                if(item !== null ){
                    return item;
                }
            })
            // console.log("category:",category);
            res.status(200).json(category);
        }
    } catch (error) {
        console.log(error);
    }
}




const createCategory= async (req,res)=>{

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

const getOneCategoryById= async (req,res)=>{

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

const updateCategoryById= async (req,res)=>{

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

const deleteCategoryById= async (req,res)=>{
    const {id}=req.params;
    // console.log(id);
    if(!id){
        res.status(400).json("id is not found")
      }else{
        let deleteById=await category.findByIdAndUpdate(id,{isDeleted:true});
        res.status(200).json(deleteById)
      }

}


module.exports={   
    getAllCategory,
    createCategory,
    getOneCategoryById,
    updateCategoryById,
    deleteCategoryById,
    getFilterCategory
}