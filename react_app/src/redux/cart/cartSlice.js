import { createSlice } from "@reduxjs/toolkit";
import { addToCart , deleteOneToCart , getAllToCart,getOneToCart } from "./cartApi";


const initialState={
    getAlldataToCart:[],
    getOneToCart:[],
    postToCart:[],
    deleteFromeCart:[],
    status:"idle",
    
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
            state.getAlldataToCart = action.payload;
        })
        .addCase(getAllToCart.rejected, (state) => {
            state.status = "failed";
        })
// =======================================================


        .addCase(getOneToCart.pending , (state)=>{
            state.status="loading";
        })
        .addCase(getOneToCart.fulfilled , (state,action)=>{
            state.status="fullfilled";
            state.getOneToCart=action.payload;

        })
        .addCase(getOneToCart.rejected , (state)=>{
            state.status="failed";
        })


// =======================================================


        .addCase(addToCart.pending , (state)=>{
            state.status="loading";
        })
        .addCase(addToCart.fulfilled , (state,action)=>{
            state.status="fullfilled";
            state.postToCart=action.payload;

        })
        .addCase(addToCart.rejected , (state)=>{
            state.status="failed";
        })

//==========================================================

        .addCase(deleteOneToCart.pending , (state)=>{
            state.status="loading";
        })
        .addCase(deleteOneToCart.fulfilled , (state,action)=>{
            state.status="fullfilled";
            state.deleteFromeCart=action.payload;
        })
        .addCase(deleteOneToCart.rejected , (state)=>{
            state.status="failed";
        })

    }
})


export default cartSlice.reducer;