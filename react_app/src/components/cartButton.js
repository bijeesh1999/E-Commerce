import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addToCart,getAllToCart } from "../redux/cart/cartApi";

function CartButton(props){
    const [cart,setCart]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // console.log(cart);

    useEffect(()=>{
      dispatch(getAllToCart());
    },[]);

    const cartDatas=useSelector((state)=>state.cart.getAlldataToCart)

    useEffect(()=>{
        const foundItem = cartDatas.some((data) => data.productId === props.id);
        if (foundItem === true) {
          setCart(foundItem);
        } else {
          setCart(foundItem); 
        }
      },[props.id,cartDatas])

    const postToCart= async (id)=>{
      dispatch(addToCart(id));
      setCart(true);
      setTimeout(() => {
        dispatch(getAllToCart());
      }, 100);
    }

    return (
        <>
          {cart ? (
            <button className="buy" onClick={()=>navigate(`/cart`)}>Go to Cart</button>
          ) : (
            <button className="buy" onClick={() => postToCart(props.id)}>Add to Cart</button>
          )}
        </>
      );
}


export default CartButton;

