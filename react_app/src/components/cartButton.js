import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updateUser } from "../redux/userAuth/userApi";
import { getUsersById } from "../redux/userAuth/userApi";


function CartButton(props){
  // alert(props)
    const [cart,setCart]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
      dispatch(getUsersById(userId));
    },[]);

    const userId=useSelector((state)=>state.user.id)
    const cartDatas=useSelector((state)=>state.user.getSingle.cart)
    const userToken=useSelector((state)=>state.user.token)

    useEffect(() => {
      if (props.cartDatas && props.cartDatas.length > 0) {
        const foundItem = props.cartDatas.some((data) => data === props.id);
        if(foundItem === true){
          console.log(foundItem);
          setCart(foundItem);
        }else{
          setCart(foundItem)
        }
      }
    }, [props]);


    // console.log(cartDatas);
    // console.log(userId,userToken);



    const postToCart= async (data)=>{
      console.log(data.id  ,   userId);
      dispatch(updateUser({userId , productID:data.id}));
      setCart(true);
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

