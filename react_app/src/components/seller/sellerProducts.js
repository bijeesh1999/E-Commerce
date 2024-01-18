import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getProducts,deleteProductById } from "../../redux/products/productApi";
import DeleteModal from "../deleteConfirm";
import "./sellerProduct.css"
// require('dotenv').config();

function SellerProducts(){
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const allProducts=useSelector((state)=>state.product.products)
    console.log(allProducts);
    console.log(process.env.REACT_APP_IMAGELINK);

    const deleteProduct=(id)=>{
        dispatch(deleteProductById(id))
        dispatch(getProducts())
    }


  return (
  <>
  <h1>hello welcome to the seller Page</h1>
  <div className="sellerWrapper">
    <div className="sellerProductContainer">
        {allProducts?.map((data,index)=>(
        <div className="singleProducts" key={index}>
            <div className="productImage">
                <img src={`http://localhost:8086/uploads/${data?.images[0]}`} />
                <div className="actions">
                {/* <i className="fa-solid fa-trash" onClick={()=>deleteProduct(data._id)}></i> */}
                <DeleteModal id={data._id}/>
                <i className="fa-solid fa-pen-to-square"></i>
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
  </>
  )
}


export default SellerProducts;
