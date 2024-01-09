import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { postProduct } from "../../redux/products/productApi";
import SellerForm from "./sellAproduct";
import "./sellingProductForm.css";

function SellerPage() {
    const [newProduct,SetNewProduct]=useState(false);
    const dispatch=useDispatch();


    const sellProduct=()=>{
      SetNewProduct(true)
    }

    
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
      {newProduct?<div id="overlay">helo</div>:null}
    </React.Fragment>
  );
}

export default SellerPage;
