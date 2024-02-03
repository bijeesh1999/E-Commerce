import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const userLogin = createAsyncThunk("userLogin", async (login) => {
  // console.log(login);
  const res = await axios.post("http://localhost:8086/user/login", login, {
    withCredentials: true,
  })
  if(res.status == 201){
    return {res:res.data , status:res.status}
  }
  else if(res.status == 200){
    localStorage.setItem("userToken",res.data.token)
    localStorage.setItem("userId", res.data.userValid._id)
    return {res:res.data , status:res.status};
  }
});

export const userRegister = createAsyncThunk(
  "userRegister",
  async (register) => {
    const res = await axios.post(
      "http://localhost:8086/user/register",register
    )
    if (res.status == 201){
      return {data:res.data , status:res.status};
    }
    else if(res.status == 200){
      return {data:res.data , status:res.status}
    }
  }
);

export const getUsers = createAsyncThunk("getAllUsers", async (page) => {
  // console.log(page);
  let res = await axios.get(`http://localhost:8086/user?page=${page}`);
  // console.log(res);
  return res.data;
});


export const updateUser = createAsyncThunk("updateUsers", async ({userId , productID}) => {
  console.log(userId,productID);
  let res = await axios.put(`http://localhost:8086/user/${userId}`,{productID:productID});
  console.log(res);
  return res.data;
});


export const getUsersById = createAsyncThunk("getUserById", async (id) => {
// console.log(id);
  let res = await axios.get(`http://localhost:8086/user/${id}`);
  return res.data;
});


export const getUserCartById = createAsyncThunk("getUserCartById", async (id) => {
  let res = await axios.get(`http://localhost:8086/user/cart/${id}`);
  console.log(res);
  return res.data;
});

