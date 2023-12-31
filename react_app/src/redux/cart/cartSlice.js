import { createSlice } from "@reduxjs/toolkit";
import { addToCart , deleteOneToCart , getAllToCart } from "./cartApi";


const initialState={
    getAlldata:[],
    postToCart:[],
    
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllToCart.pending, (state) => {
            state.status = "Loading";
        })
        .addCase(getAllToCart.fulfilled, (state, action) => {
            state.status = "success";
            state.getAlldata = action.payload;
        })
        .addCase(getAllToCart.rejected, (state) => {
            state.status = "failed";
        })
// =======================================================

        // .addCase(addToCart.pending , (state)=>{
        //     state.status="loading";
        // })
        // .addCase(addToCart.pending , (state,action)=>{
        //     state.status="fullfilled";
        //     state.postToCart=action.payload;

        // })
        // .addCase(addToCart.pending , (state)=>{
        //     state.status="loading";
        // })

    }
})


export default cartSlice.reducer;