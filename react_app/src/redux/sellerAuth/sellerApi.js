import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const sellerLogin = createAsyncThunk("sellerLogin", async (loginData) => {
  const res = await axios.post("http://localhost:8086/seller/login", loginData, {
    withCredentials: true,
  })
  if(res.status == 201){
    // console.log(res.data);
    return {res:res.data , status:res.status}
  }else{
    localStorage.setItem("sellerToken", res.data.token);
    localStorage.setItem("sellerId",res.data.sellerValid._id);
    console.log(res);
    return {res:res.data , status:res.status};
  }
});



export const sellerRegister = createAsyncThunk(
  "sellerRegister",
  async (registerData) => {
    const res = await axios.post(
      "http://localhost:8086/seller/register",registerData
    );
    // console.log(res);
    if (res.status == 201) {
      return {res:res.data , status:res.status};
    }else{
      return {res:res.data , status:res.status};
    }
  }
);



export const getSellers = createAsyncThunk("getAllSellers", async ({page,key}) => {
  console.log(page,key);
  let res = await axios.get(`http://localhost:8086/seller?page=${page}&key=${key?key:key=''}`);
  console.log(res);
  return res.data;
});
