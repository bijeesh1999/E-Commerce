import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getProducts } from "../../redux/products/productApi";
import { getCategories } from "../../redux/category/categoryApi";
import Mobiles from "../productComponents/mobiles";
import Laptops from "../productComponents/laptops";
import Watches from "../productComponents/watches";
import Fasion from "../productComponents/fasions";
import Electronics from "../productComponents/electronics";
import HomeAppliances from "../productComponents/homeAppliances";




function AllProuct(){
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
        dispatch(getCategories())
    },[dispatch])
    // const product=useSelector((state)=>state.product.products);
    // const categories=useSelector((state)=>state.category.categories)
    // console.log("product:",product);
    // console.log("categories:",categories);


    return(
        <>
        <Mobiles />
        <Laptops />
        <Watches />
        <Fasion />
        <Electronics />
        <HomeAppliances />
        </>
    )

}

export default AllProuct;