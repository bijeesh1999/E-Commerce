import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("sellerToken");
let userId = localStorage.getItem("sellerId");

export const sellerLogin = createAsyncThunk("sellerLogin", async (login) => {
  const res = await axios.post("http://localhost:8086/seller/login", login, {
    withCredentials: true,
  });
  console.log(res);
  localStorage.setItem("sellerToken", JSON.stringify(res.data.token));
  localStorage.setItem("sellerId", JSON.stringify(res.data.sellerValid._id));
  return res;
});

export const sellerRegister = createAsyncThunk(
  "sellerRegister",
  async (register) => {
    const res = await axios.post(
      "http://localhost:8086/seller/register",register
    );
    if (res) {
      return res;
    }
  }
);

export const getSellers = createAsyncThunk("getAllSellers", async () => {
  let res = await axios.get("http://localhost:8086/seller");
  // console.log(res);
  return res.data;
});
