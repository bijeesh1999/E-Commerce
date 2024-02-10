import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryModal from "./categoryModal";
import { getFilterCategory } from "../../redux/category/categoryApi";



function AllCategorieList(){
    const [categories , setCategories]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getFilterCategory())
    },[])

    const categorie=useSelector((state)=>state.category?.filter?.filterCategory);
    const pages=useSelector((state)=>state.category?.filter?.totalPage)


    useEffect(()=>{
        const array=[];
        if (categorie && Array.isArray(categorie)) {
            categorie.map(data => {array.push(data)});
            setCategories(array);
        }
    },[categorie])
    // console.log(pages,categorie);

    return(
        <>
        <CategoryModal data={categories} totalPage={pages}/>
        </>
    )


}

export default AllCategorieList;