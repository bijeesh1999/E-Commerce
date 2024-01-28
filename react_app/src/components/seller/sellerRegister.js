import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { sellerRegister } from "../../redux/sellerAuth/sellerApi";
import "./seller.css";


function SellerRegister(props){
  console.log(props.setRegister , props.setSellerLogin);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [data,setData]=useState();
  const [error , setError]=useState('')

  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })

  }

  const registerUser=async (e)=>{
    e.preventDefault();
  dispatch(sellerRegister(data))
  }

  const sellerReg=useSelector((state)=>state.seller.sellerRegister)
  useEffect(()=>{
    if(sellerReg.status == 201){
      setError(sellerReg.res)
    }
    else if(sellerReg.status == 200){
      navigate("/adminSelling");
      props.setRegister(false);
    }
  },[sellerReg])

  console.log(sellerReg);

      return (
        <div id="userRegister">
          {/* <span>SellerRegister</span> */}
        <form onSubmit={registerUser}>
        <div className="input-container">
            <label>userName</label>
            <input type="text" name="userName"  onChange={handleChange} placeholder="userName"/>
          </div>
          <div className="input-container">
            <label>emailId </label>
            <input type="text" name="emailId"  onChange={handleChange} placeholder="userName"/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password"  onChange={handleChange} placeholder="userName"/>
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        <div className="instructions">
          <span>SellerRegister</span>
          <div className="image">image</div>
          <div className="validation">{error}</div>
          <button onClick={()=>props.setRegister(false)}>login ?</button>
        </div>
        </div>
      );
}

export default SellerRegister;