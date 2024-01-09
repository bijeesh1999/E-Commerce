import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserRegister from "./userRegistration";
import axios from "axios";
import "./user.css";


function LoginUser({overlay}){
  const navigate=useNavigate();
  const [login,SetLogin]=useState();
  const [register,setRegister]=useState(false);
  console.log(login);


const handleChange=(e)=>{
  SetLogin({
    ...login,
    [e.target.name]:e.target.value,
  })
}
  const loginUser=async (e)=>{
    e.preventDefault();
    console.log(login);
    const res=await axios.post("http://localhost:8086/user/login",login)
    console.log(res);
    if(res.status=200){
      navigate("/cart")
    }
    
  
  }

  const showRegister=()=>{
    setRegister(true)
  }


    return(
      <>
      <div id="loginRegister">
        <div className="form">
          {register ? <UserRegister setRegister={setRegister}/> : null}
        <form onSubmit={loginUser}>
          <div className="input-container">
            <label>emailId </label>
            <input type="text" name="emailId" required onChange={handleChange} placeholder="email"/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password" required onChange={handleChange} placeholder="password"/>
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        <div className="instructions">
        <button id="Register" onClick={()=>showRegister()}>Register</button>
        </div>
      </div>
      </div>
      {overlay ? <div className="loginoverlay"></div>:null}

      </>
    )
}


export default LoginUser;