import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllToCart=createAsyncThunk("getAllToCart",async()=>{

   let res = axios.get("http://localhost:8086/cart");
   return res.data;

});



export const addToCart=createAsyncThunk("addToCart",async(data)=>{

    let res=axios.post("http://localhost:8086/cart",data);
    return res.data;
    
});



// export const editOneToCart=createAsyncThunk("editOneToCart",async(id , data )=>{

//     let res=axios.put(`http://localhost:8086/cart/${id}`,data);
//     return res.data

// });



export const deleteOneToCart=createAsyncThunk("deleteOneToCart",async(id)=>{

    let res=axios.delete(`http://localhost:8086/cart/${id}`);
    return res.data

});

