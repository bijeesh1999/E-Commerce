import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getUserCartById } from "../../redux/userAuth/userApi";
import PayButton from "../payButton";

function Cart(){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUserCartById(userId))
    },[]);

    const userId=useSelector((state)=>state.user.id)
    const token= useSelector((state)=>state.user.token)
    const cartData=useSelector((state)=>state.user.cart)

console.log(userId);
console.log(cartData);
// console.log(allProducts);

    // let array=[];
    let totalAmount=0
        cartData?.map((data)=>{
                totalAmount+=(data.mrp-data.discount);
        });
   
    // const deleteFromeCart= (id)=>{
    //     cartData?.map((data)=>{
    //         dispatch(deleteOneToCart(cartId._id))
    //         setTimeout(() => {
    //             dispatch(getAllToCart());
    //         },100);
    //     }})
    // }

    return(
        <React.Fragment>
            <div id="cart">
                <h1 className="cartHeadig">Cart</h1>
                <div className="cartDatas">
                    {cartData?.map((data,index)=>(
                        <div className="cartData" key={index} >
                            <img src={`http://localhost:8086/uploads/${data.images[0]}`} alt="" />
                            <div className="details">
                                <h2>{data.ProductName}</h2>
                                <h3>{data.Description}</h3>
                                <div className="buttons">
                                    {/* <button id="remove" onClick={()=>deleteFromeCart(data._id)}>Remove</button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="total">
                    <h3>total amount:{totalAmount}</h3>
                    <h4>free shipping</h4>
                    <PayButton data={cartData} amount={totalAmount}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;


// onClick={()=>navigate(`/product/${data._id}`)}