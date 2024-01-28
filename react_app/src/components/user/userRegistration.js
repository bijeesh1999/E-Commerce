import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { userRegister } from "../../redux/userAuth/userApi";
import "./user.css";


function UserRegister(props){
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [data,setData]=useState();
  const [error , setError]=useState("");

  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const registerUser=async (e)=>{
    e.preventDefault();
    dispatch(userRegister(data))
  }

  const userAuth=useSelector((state)=>state.user.userRegister)
  useEffect(()=>{
    if(userAuth.status == 201){
      setError(userAuth.data)
    }
    else if(userAuth.status == 200){
      navigate("/MyOrder")
      setTimeout(() => {
        props.setLogin(false)
      }, 200);
    }
  },[userAuth])
      return (
        <div id="userRegister">
        <form onSubmit={registerUser}>
        <div className="input-container">
            <label>userName</label>
            <input type="text" name="userName" required onChange={handleChange} placeholder="userName"/>
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
          <span>UserRegister</span>
          <div className="image">image</div>
          <div className="validation">{error}</div>
          <button onClick={()=>props.setRegister(false)}>login ?</button>
        </div>
        </div>
      );
}

export default UserRegister;