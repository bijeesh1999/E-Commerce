import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
// import { addToCart,getAllToCart } from "../redux/cart/cartApi";
import { updateUser } from "../redux/userAuth/userApi";
import { userLogin } from "../redux/userAuth/userApi";

function CartButton(props){
  // alert(props.id)
  let userId;
  let userToken;
    const [cart,setCart]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // console.log(cart);

    useEffect(()=>{
      // dispatch(getAllToCart());
      userId = localStorage.getItem('userId');
      userToken = localStorage.getItem('userToken');
    },[]);

    // const cartDatas=useSelector((state)=>state.cart.getAlldataToCart)
    console.log(userId,userToken);

    // useEffect(()=>{
    //     const foundItem = cartDatas.some((data) => data.productId === props.id);
    //     if (foundItem === true) {
    //       setCart(foundItem);
    //     } else {
    //       setCart(foundItem); 
    //     }
    //   },[props.id,cartDatas])

    const postToCart= async (data)=>{
      dispatch(updateUser(userId , {productID:data.id}));
      // setCart(true);
      // // setTimeout(() => {
      // //   dispatch(getAllToCart());
      // // }, 100);
    }

    return (
        <>
          {cart ? (
            <button className="buy" onClick={()=>navigate(`/cart`)}>Go to Cart</button>
          ) : (
            <button className="buy" onClick={() => postToCart(props)}>Add to Cart</button>
          )}
        </>
      );
}


export default CartButton;

