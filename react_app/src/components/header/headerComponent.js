import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginSeller from "../seller/sellerLogin";
import LoginUser from "../user/userLogin";
import SearchBar from "./searchBar";
import { getUsersById } from "../../redux/userAuth/userApi";
import "./header.css";


function Header() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [login , setLogin]=useState(false);
  const [sellerlogin,setSellerLogin]=useState(false)

  const userId=useSelector((state)=>state.user.id)
  const userToken=useSelector((state)=>state.user.token)


  if(userToken){
    dispatch(getUsersById(userId))
  }

  const cartData=useSelector((state)=>state.user.getSingle.cart?.length)
  const isSeller=useSelector((state)=>state.seller.sellerToken)

  // console.log(isSeller);

  // console.log(cartData?.length);

  const sellerAuth=()=>{
    if(isSeller){
      navigate("/adminSelling")
    }else{
      setSellerLogin(true)
    }
  }
  
    const userAuth=()=>{
      // navigate("/cart")
  }

  const myOrder = () =>{
    if(userToken){
      navigate("/MyOrder")
    }else{
      setLogin(true)
    }
  }


  return (
    <React.Fragment>
      <header id="header">
        <div id="logo" className="border">
            <img src="" alt="" />
        </div>
        <SearchBar />
        <div id="cartAndSign">
        <div className="seller border" onClick={()=>myOrder()}>my-Order</div>
        <div className="seller border" onClick={()=>sellerAuth()}>Become a seller</div>
          <div className="signup border" onClick={()=>userAuth()}>sign in</div>
          <div className="cart border" onClick={()=>userAuth()}>
            <span>{cartData}</span>
            <i className="material-symbols-outlined">remove_shopping_cart</i>Cart
          </div>
        </div>
      </header>
      {login ? <LoginUser overlay={login} setLogin={setLogin}/>:null}
      {sellerlogin ? <LoginSeller overlay={sellerlogin} setSellerLogin={setSellerLogin} />:null}
    </React.Fragment>
  );
}

export default Header;
