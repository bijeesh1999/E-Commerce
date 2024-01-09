import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllToCart } from "../../redux/cart/cartApi";
import LoginUser from "../user/userLogin";
import SearchBar from "./searchBar";
import "./header.css";

function Header() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [login , setLogin]=useState(false);

  useEffect(()=>{
    dispatch(getAllToCart())
  },[dispatch])

  const cartData=useSelector((state)=>state.cart.getAlldataToCart)

  const sellerAuth=()=>{
    // if(sessionStorage.cookie){
      navigate("/adminSelling")
    // }else{
    //   setLogin(true)
    // }
  }
    const userAuth=()=>{
    if(sessionStorage.cookie){
      navigate("/cart")
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
        <div className="seller border" onClick={()=>sellerAuth()}>Become a seller</div>
          <div className="signup border" onClick={()=>userAuth()}>sing in</div>
          <div className="cart border" onClick={()=>userAuth()}>
            <span>{cartData.length}</span>
            <i className="material-symbols-outlined">remove_shopping_cart</i>Cart
          </div>
        </div>
      </header>
      {login ? <LoginUser overlay={login}/>:null}
    </React.Fragment>
  );
}

export default Header;
