import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryModal from "./categoryModal";
import { getFilterCategory } from "../../redux/category/categoryApi";



function AllCategorieList(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getFilterCategory())
    },[])

    const categorie=useSelector((state)=>state.category.filter)

    const data=categorie?.allCategory?.map((data)=>data);
    const page=categorie.totalPage;
    // console.log(data,page);

    return(
        <>
        <CategoryModal data={data&&data[0]} totalPage={page}/>
        </>
    )


}

export default AllCategorieList;