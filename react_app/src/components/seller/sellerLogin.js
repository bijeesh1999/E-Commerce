import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SellerRegister from "./sellerRegister";
import "./seller.css";
import { sellerLogin } from "../../redux/sellerAuth/sellerApi";

function LoginSeller(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, SetLogin] = useState();
  const [register, setRegister] = useState(false);
  const [error , setError]=useState("")

  // console.log(props);

  const handleChange = (e) => {
    SetLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    dispatch(sellerLogin(login));

  };

  const sellerAuth=useSelector((state)=>state.seller.logedSeller)
  useEffect(()=>{
    if(sellerAuth.status == 201){
      console.log(sellerAuth.res);
      setError(sellerAuth.res)
    }else if(sellerAuth.status == 200){
      navigate("/adminSelling");
      props.setSellerLogin(false);
    }
  },[sellerAuth])


  const showRegister = () => {
    setRegister(true);
  };

  return (
    <>
      <div id="loginRegister">
        <div className="form">
          {register ? <SellerRegister setRegister={setRegister}  setSellerLogin={props.setSellerLogin}/> : null}
          <form onSubmit={loginUser}>
            <div className="input-container">
              <label>emailId </label>
              <input
                type="text"
                name="emailId"
                onChange={handleChange}
                placeholder="email"
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="password"
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <div className="instructions">
            <span>SellerLogin</span>
          <div className="image">image</div>
          <span className="validation">{error}</span>
            <button id="Register" onClick={() => showRegister()}>Register ?</button>
          </div>
        </div>
      </div>
      {props.overlay ? <div className="loginoverlay"></div> : null}
    </>
  );
}

export default LoginSeller;
