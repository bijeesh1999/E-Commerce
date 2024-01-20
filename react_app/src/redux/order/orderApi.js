import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllOrder=createAsyncThunk("getAllOrder",

    async ()=>{
        const allOrdr = await axios.get("http://localhost:8086/order")
        if(allOrdr){
            return allOrdr;
        }
        else{
            console.log("no such data found");
        }
});


export const getOneOrder=createAsyncThunk("getOneOrder",

    async (id)=>{
        const singleOrdr = await axios.get(`http://localhost:8086/order/${id}`)
        if(singleOrdr){
            return singleOrdr;
        }
        else{
            console.log("no such data found");
        }   
})


export const getMyOrderHistory=createAsyncThunk("getMyOrderHistory",

    async (id)=>{
        const myOrderHistory = await axios.get(`http://localhost:8086/order/userOrder/${id}`)
        if(myOrderHistory){
            return myOrderHistory.data;
        }
        else{
            console.log("no such data found");
        }   
})