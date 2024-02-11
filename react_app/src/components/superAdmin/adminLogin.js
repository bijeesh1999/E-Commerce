import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../redux/superAdmin/superAdminApi"; 
import BIRDS from "vanta/src/vanta.birds"




function AdminLogin() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [err,setErr]=useState("")

    useEffect(() => {
      BIRDS({
          el:".adminLoginContainer",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x90909,
          color1: 0xf70a0a,
          colorMode: "variance"
      })
    }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginAdmin(data))
  };

  const isAdminlog=useSelector((state)=>state.admin.adminLogin)
  console.log(isAdminlog);

  useEffect(()=>{
    if(isAdminlog.status === 201){
        setErr(isAdminlog.data)
    }else if(isAdminlog.status === 200){
        navigate("/superAdmin")
    }
  },[isAdminlog])

  return (
    <div className="adminLoginContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>adminLogin</h4>
        <div className="inputBlock">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            {...register("emailId", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.emailId && <p>Email is required and must be valid</p>}
        </div>
        <div className="inputBlock">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>Password is required</p>}
        </div>
        <span>{err}</span>
        <button type="submit">Submit</button>
      </form>

      <button onClick={()=>navigate("/vanta")}>vanta</button>
    </div>
  );
}

export default AdminLogin;
