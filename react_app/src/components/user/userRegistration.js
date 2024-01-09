import React, { useState } from "react";
import axios from "axios";
import "./user.css";


function UserRegister({setRegister}){
  const [data,setData]=useState();

  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })

  }

  const registerUser=async (e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:8086/user/register",data) 
    console.log(res);
  }

      return (
        <div id="userRegister">
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

export default UserRegister;