import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/products/productApi";
import Slick from "../../slicCorosal/slicCurosel";
import "./product.css";

function Watches() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  let [image,setImage]=useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  const category = useSelector((state) => state.category.categories);

  useEffect(() => {
    if (products && category) {
      let newArray = [];
      products?.map((element) =>
        category?.map((data) => {
          if (
            element.categoryId === data._id &&
            data.categoryName === "Watches"
          ) {
            newArray.push({
              images:element.images[0],
              id:element._id,
              Name:data.categoryName,
              Product:element.ProductName,

            })}
        }));
        setImage(newArray)
    }
  }, [products, category]);


  return (
    <div className="WatchCollection">
      {/* <Slick /> */}
      <h2>{image ? image[0]?.Name:null}</h2>
      <div className="Watches">
        {image?.map((image,index) => (
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

export default Watches;
