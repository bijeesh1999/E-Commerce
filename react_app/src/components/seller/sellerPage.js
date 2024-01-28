import React, { useState , useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts,deleteProductById } from "../../redux/products/productApi";
import DeleteModal from "../deleteConfirm";
import SellerForm from "./sellAproduct";
import "./sellingProductForm.css";

function SellerPage() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const [newProduct,SetNewProduct]=useState(false);


    const sellProduct=()=>{
      SetNewProduct(true)
    }
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
  
      const allProducts=useSelector((state)=>state.product.products)
      console.log(allProducts);
      console.log(process.env.REACT_APP_IMAGELINK);


    
  return (
    <React.Fragment>
        <header id="sellerHeader">
          <h1>Seller</h1>
          <div className="sellerButtons">
          <button onClick={()=>sellProduct()}>sell a Product</button>
          <button>customerse</button>
          <button>log out</button>
          </div>
        </header>
      <div className="sellerContainer">
        {newProduct ? <SellerForm SetNewProduct={SetNewProduct} />:null}
      </div>

      <div className="sellerWrapper">
    <div className="sellerProductContainer">
        {allProducts?.map((data,index)=>(
        <div className="singleProducts" key={index}>
            <div className="productImage">
                <img src={`http://localhost:8086/uploads/${data?.images[0]}`} />
                <div className="actions">
                <DeleteModal id={data._id}/>
                <i className="fa-solid fa-pen-to-square" onClick={()=>navigate(`/editOneProduct/${data._id}`)}></i>
                </div>
            </div>
            <div className="details">
                <h4>{data.ProductName}</h4>
                <h4>{data.categoryName}</h4>
                <div className="price">
                    <h5>{data.mrp}</h5>
                    <h5>{data.discount}</h5>
                </div>
                <h5>Post Date : {data.createdAt.split("T")[0]}</h5>

            </div>
        </div>
        ))}
    </div>
  </div>



      {newProduct?<div id="overlay"></div>:null}
    </React.Fragment>
  );
}

export default SellerPage;
