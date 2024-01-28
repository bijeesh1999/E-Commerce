import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryModal from "./categoryModal";
import { getCategories } from "../../redux/category/categoryApi";



function AllCategorieList(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getCategories())
    },[])

    const categorie=useSelector((state)=>state.category.categories)

    return(
        <>
        <CategoryModal categorie={categorie}/>
        </>
    )


}

export default AllCategorieList;