import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserRegister from "./userRegistration";
import { userLogin } from "../../redux/userAuth/userApi";
import "./user.css";


function LoginUser(props){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [login,SetLogin]=useState();
  const [register,setRegister]=useState(false);
  const [error , setError]=useState("");


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
  const userAuth=useSelector((state)=>state.user.loginedUser)
  console.log(userAuth);

  useEffect(()=>{
    if(userAuth.status == 201){
      setError(userAuth.res)
    }else if(userAuth.status == 200){
    navigate("/MyOrder")
      props.setLogin(false)
    }
  },[userAuth])

  const showRegister=()=>{
    setRegister(true)
  }

    return(
      <>
      <div id="loginRegister">
        <div className="form">
          {register ? <UserRegister setRegister={setRegister} setLogin={props.setLogin}/> : null}
        <form onSubmit={loginUser}>
          <div className="input-container">
            <label>emailId </label>
            <input type="text" name="emailId"  onChange={handleChange} placeholder="email"/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="password"  onChange={handleChange} placeholder="password"/>
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
        <div className="instructions">
        <span>UserLogin</span>
          <div className="image">image</div>
          <div className="validation">{error}</div>
            <button id="Register" onClick={() => showRegister()}>Register ?</button>        </div>
      </div>
      </div>
      {props.overlay ? <div className="loginoverlay"></div>:null}

      </>
    )
}

// setLogin
export default LoginUser;