import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const userLogin = createAsyncThunk("userLogin", async (login) => {
  console.log(login);
  const res = await axios.post("http://localhost:8086/user/login", login, {
    withCredentials: true,
  });
  localStorage.setItem("userToken",res.data.token)
  localStorage.setItem("userId", res.data.userValid._id)
  return res;
});

export const userRegister = createAsyncThunk(
  "userRegister",
  async (register) => {
    const res = await axios.post(
      "http://localhost:8086/user/register",
      register
    );
    if (res) {
      return res;
    }
  }
);

export const getUsers = createAsyncThunk("getAllUsers", async () => {
  let res = await axios.get("http://localhost:8086/user");
  // console.log(res);
  return res.data;
});


export const updateUser = createAsyncThunk("updateUsers", async ({userId , productID}) => {
  console.log(userId,productID);
  let res = await axios.put(`http://localhost:8086/user/${userId}`,{productID:productID});
  console.log(res);
  return res.data;
});


export const getUsersById = createAsyncThunk("getUsersById", async (id) => {
  let res = await axios.get(`http://localhost:8086/user/${id}`);
  console.log(res);
  return res.data;
});


export const getUserCartById = createAsyncThunk("getUserCartById", async (id) => {
  let res = await axios.get(`http://localhost:8086/user/cart/${id}`);
  console.log(res);
  return res.data;
});

