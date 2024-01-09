import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductById } from "../../redux/products/productApi";
import CartButton from "../cartButton";
import PayButton from "../payButton";
import "./singleData.css";


function SingleProduct (){
const[image,setImage]=useState();
const dispatch=useDispatch();
const params=useParams();
const navigate=useNavigate();

const id=params.id;
    useEffect(()=>{
        dispatch(getProductById(id));
    },[dispatch,id])

    const data= useSelector((state)=>state.product.singleProduct);
    let sellingPrice=data.mrp-data.discount;
    let discountPer=Math.ceil((data.discount / data.mrp)*100)
    // console.log(discountPer);
    // console.log(data);
    useEffect(()=>{
        if (data && data.images && data.images.length > 0) {
            setImage(data.images[0])
          }
    },[data])

    return(
        <React.Fragment>
            <div id="SingleDataheader">
                <img src={`http://localhost:8086/uploads/${image}`} alt="image" />
                <div className="details">{data.Description}</div>
                <div className="price">
                    <h4>{sellingPrice} / <span style={{textDecoration:"line-through"}}>{data.mrp}</span></h4>
                </div>
            </div>
        <div className="SingleData">
            <div className="images">
                {data?.images?.map((image ,index)=>(
                    <img src={`http://localhost:8086/uploads/${image}`} alt="images" key={index} onMouseOver={()=>setImage(data.images[index])}/>
                ))}
            </div>
            <div className="focusImage">
                <img src={`http://localhost:8086/uploads/${image}`} alt="image"/>
            </div>
            <div className="dataDetails">
                <div className="overView">{data?.Description}</div>
                <div className="price">
                    <div className="percentage">{`-${discountPer}%`}</div>
                    <div className="finalPrice">{`${sellingPrice}`}</div>
                    <div className="offer" style={{textDecoration:" line-through"}}>{data?.mrp}</div>
                </div>
                <div className="buttons">
                    <CartButton id={data._id}/>
                    <PayButton data={[data]}/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default SingleProduct;