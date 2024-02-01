import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/productApi";
import { useNavigate } from "react-router-dom";
import Slick from "../../slicCorosal/slicCurosel";
import "./product.css";

function HomeAppliances() {
  const navigate=useNavigate();
  const [homeappliances , setHomeAppliances]=useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);


  const products = useSelector((state) => state.product.products);
  const category=useSelector((state)=>state.category.categories);

  useEffect(()=>{
    if(products && category){
      let array=[]
      products?.map((element) => (
        category?.map((data)=>{
          if(element.categoryId == data._id && data.categoryName == "HomeAppliances"){
            array.push({
              images:element.images[0],
              id:element._id,
              Name:data.categoryName,
              Product:element.ProductName,
            })}
        })
      ));
      setHomeAppliances(array)
    }

  },[products,category]);


  return (
    <div className="homeAppliances">
    {/* <Slick /> */}
    <h2>{homeappliances ? homeappliances[0]?.Name:null}</h2>
      <div className="HomeAppliances">
      {homeappliances?.map((image,index) => (
          <div className="img" key={index} onClick={()=>navigate(`/product/${image.id}`)}>
            <div className="image">
            <img src={`http://localhost:8086/uploads/${image.images}`} alt="images"/>
            </div>
            <h3>{image.Product}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeAppliances;
