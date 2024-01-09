import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllToCart=createAsyncThunk("getAllToCart",async()=>{

   let res = await axios.get("http://localhost:8086/cart");
//    console.log(res.data);
   return res.data;

});

export const getOneToCart=createAsyncThunk("getOneToCart",async(id)=>{
    console.log(id);

    let res= await axios.get(`http://localhost:8086/cart/${id}`);
    return res.data

});



export const addToCart = createAsyncThunk("addToCart", async (id) => {
    try {
      if (id) {
        console.log("Product ID:", id);
          let res = await axios.post("http://localhost:8086/cart", {
          productId: id,
        });
            return res.data;
      } else {
        console.log("Error: Invalid ID");
        throw new Error("Invalid ID");
      }
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  });



// export const editOneToCart=createAsyncThunk("editOneToCart",async(id , data )=>{

//     let res=axios.put(`http://localhost:8086/cart/${id}`,data);
//     return res.data

// });



export const deleteOneToCart=createAsyncThunk("deleteOneToCart",async(id)=>{

    let res= await axios.delete(`http://localhost:8086/cart/${id}`);
    if(res.status = 200){
      console.log(res);
      return res.data;
    }
    else{
        console.log('error');
    }

});

