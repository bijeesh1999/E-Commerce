import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { sellerRegister } from "../../redux/sellerAuth/sellerApi";
import "./seller.css";


function SellerRegister({setRegister}){
  const dispatch=useDispatch();
  const [data,setData]=useState();

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

  const allseller=useSelector((state)=>state)

      return (
        <div id="userRegister">
          <span>SellerRegister</span>
        <form onSubmit={registerUser}>
        <div className="input-container">
            <label>userName</label>
            <input type="text" name="userName" required onChange={handleChange} placeholder="userName"/>
          </div>
          <div className="input-container">
            <label>emailId </label>
            <input type="text" name="emailId" required onChange={handleChange} placeholder="userName"/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required onChange={handleChange} placeholder="userName"/>
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        <div className="instructions">
          <button onClick={()=>setRegister(false)}>close</button>
        </div>
        </div>
      );
}

export default SellerRegister;