import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../../redux/products/productApi";
import DeleteModal from "../deleteConfirm";
import "./category.css";

function SingleCategory() {
  const [state,setState]=useSearchParams()
  const [action,setAction]=useState(true)
  const set=state.get('set')
  // console.log(action);
  const navigate=useNavigate();
  const params = useParams();
  const id = params.id;
  const dispatch=useDispatch();

  const products=useSelector((state)=>state.product.categoryProduct);
  useEffect(()=>{
        dispatch(getProductsByCategory(id))
  },[dispatch,id])

  useEffect(()=>{
    setAction(set)
    console.log(set);
  },[set])


  return (
    <div className="categoriePrduct">
      <h1 className="categoryName">{products[0]?.categoryName}</h1>
      <div className="categoryData">
        {products?.map((data, index) => (
          <div className="datas" key={index}>
            <div className="img">
            <img
              src={`http://localhost:8086/uploads/${data.images[0]}`}
              alt="images"
              onClick={()=>navigate(`/product/${data._id}`)}/>
              {action && <div className="actions">
                <DeleteModal id={data._id}/>
                <i className="fa-solid fa-pen-to-square" onClick={()=>navigate(`/editOneProduct/${data._id}?navigate=/singleCategory/${id}`)}></i>
              </div>}
            </div>
            <h3>{data.ProductName}</h3>
            <div className="descriptions">
              <h4 className="details">{data.Description.slice(0,40)}...</h4>
              <div className="price" style={{ padding: "10px" }}>
                <h4 style={{ textDecoration: "line-through" }}>{data.mrp}</h4>
                <h4>{data.mrp - data.discount}</h4>
              </div>
            </div>
            <div className="overlay"></div>
            <span>-{(Math.ceil((data?.discount/data?.mrp)*100))}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
// ()=>navigate(`/product/${data._id}`)
export default SingleCategory;
