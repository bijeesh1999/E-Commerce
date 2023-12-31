import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/products/productApi";
import Slick from "../../slicCorosal/slicCurosel";
import "./product.css";

function Electronics() {
  const navigate=useNavigate();
  const [electronics , setElectronics]=useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);


  const products = useSelector((state) => state.product.products);
  const category=useSelector((state)=>state.category.categories);

  useEffect(()=>{
    if(products && category){
      let array=[];
      products?.map((element) => (
        category?.map((data)=>{
          if(element.categoryId == data._id && data.categoryName == "Electronics"){
            array.push({images:element.images[0],
              id:element._id,
              Name:element.ProductName,
            })          }
        })
      ));
      setElectronics(array)
    }

  },[products,category]);




  return (
    <div className="electronics">
    {/* <Slick /> */}
    <h2>Electronics</h2>
      <div className="Electronics">
      {electronics?.map((image) => (
          <div className="img" key={image} onClick={()=>navigate(`/product/${image.id}`)}>
            <div className="image">
            <img src={`http://localhost:8086/uploads/${image.images}`} alt="images"/>
            </div>
            <h3>{image.Name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Electronics;
