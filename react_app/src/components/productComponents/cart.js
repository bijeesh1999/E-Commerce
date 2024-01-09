import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getAllToCart , deleteOneToCart } from "../../redux/cart/cartApi";
import { getProducts } from "../../redux/products/productApi";
import PayButton from "../payButton";

function Cart(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllToCart());
        dispatch(getProducts());
    },[]);

    const cartDatas=useSelector((state)=>state.cart.getAlldataToCart)
    const allProducts= useSelector((state)=>state.product.products)

    let array=[];
    let totalAmount=0
    {cartDatas?.map((data)=>{
        allProducts?.map((allproduct)=>{
            if(data.productId === allproduct._id){
                array.push(allproduct);
                totalAmount+=(allproduct.mrp-allproduct.discount);
            }
        });
    })}
    const deleteFromeCart= (id)=>{
        cartDatas.map((cartId)=>{
        if(cartId.productId === id ){
            dispatch(deleteOneToCart(cartId._id))
            setTimeout(() => {
                dispatch(getAllToCart());
            },100);
        }})
    }

    return(
        <React.Fragment>
            <div id="cart">
                <h1 className="cartHeadig">Cart</h1>
                <div className="cartDatas">
                    {array?.map((data,index)=>(
                        <div className="cartData" key={index} >
                            <img src={`http://localhost:8086/uploads/${data.images[0]}`} alt="" />
                            <div className="details">
                                <h2>{data.ProductName}</h2>
                                <h3>{data.Description}</h3>
                                <div className="buttons">
                                    <button id="remove" onClick={()=>deleteFromeCart(data._id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="total">
                    <h3>total amount:{totalAmount}</h3>
                    <h4>free shipping</h4>
                    <PayButton data={array}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;


// onClick={()=>navigate(`/product/${data._id}`)}