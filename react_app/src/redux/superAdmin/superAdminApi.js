import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const loginAdmin=createAsyncThunk("loginAdmin",

  async (adminLogData)=>{
    const adminAuth=await axios.post("http://localhost:8086/admin/login",adminLogData ,{
        withCredentials:true
    })
    console.log(adminAuth);
    if(adminAuth.status === 201){
        return {data:adminAuth.data,status:adminAuth.status}
    }else if(adminAuth.status == 200){
        return {data:adminAuth.data , status:adminAuth.status}
    }
    
  }
)