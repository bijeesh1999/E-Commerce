import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserRegister from "./userRegistration";
import { userLogin } from "../../redux/userAuth/userApi";
import "./user.css";


function LoginUser({overlay}){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [login,SetLogin]=useState();
  const [register,setRegister]=useState(false);


const handleChange=(e)=>{
  SetLogin({
    ...login,
    [e.target.name]:e.target.value,
  })
}
  const loginUser=async (e)=>{
    e.preventDefault();
    dispatch(userLogin(login))

  }
  const showRegister=()=>{
    setRegister(true)
  }

  const data=useSelector((state)=>state.user.loginedUser)
  console.log(data);
    return(
      <>
      <div id="loginRegister">
        <span>UserLogin</span>
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