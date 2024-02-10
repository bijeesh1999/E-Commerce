import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../redux/category/categoryApi";


function AllProuct(){
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])
    const categories=useSelector((state)=>state.category.categories)

    return(
        <div className="overFlowContainer">
        {categories.map((category , index)=>(
            <div className="categoryProducts" key={index} onClick={()=>navigate(`/singleCategory/${category._id}?set=true`)}>{category.categoryName}</div>
        ))}
        </div>
    )

}

export default AllProuct;