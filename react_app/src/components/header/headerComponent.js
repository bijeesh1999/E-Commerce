import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginSeller from "../seller/sellerLogin";
import LoginUser from "../user/userLogin";
import SearchBar from "./searchBar";
import "./header.css";

function Header() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [login , setLogin]=useState(false);
  const [sellerlogin,setSellerLogin]=useState(false)

  useEffect(()=>{
  },[dispatch])

  const cartData=useSelector((state)=>state.user.cart.length)
  // console.log(cartData);

  const sellerAuth=()=>{
    // if(sessionStorage.cookie){
      navigate("/adminSelling")
    // }else{
    //   setSellerLogin(true)
    // }
  }
    const userAuth=()=>{
    // if(cartData.token){
    //   navigate("/cart")
    // }else{
    //   setLogin(true)
    // }
  }


  return (
    <React.Fragment>
      <header id="header">
        <div id="logo" className="border">
            <img src="" alt="" />
        </div>
        <SearchBar />
        <div id="cartAndSign">
        <div className="seller border" onClick={()=>sellerAuth()}>Become a seller</div>
          <div className="signup border" onClick={()=>userAuth()}>sing in</div>
          <div className="cart border" onClick={()=>userAuth()}>
            <span>{cartData}</span>
            <i className="material-symbols-outlined">remove_shopping_cart</i>Cart
          </div>
        </div>
      </header>
      {login ? <LoginUser overlay={login}/>:null}
      {sellerlogin ? <LoginSeller overlay={sellerlogin}/>:null}
    </React.Fragment>
  );
}

export default Header;
