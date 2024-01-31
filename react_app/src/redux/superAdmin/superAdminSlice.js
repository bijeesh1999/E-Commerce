import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "./superAdminApi";



const initialState={
    adminLogin:[],
    adminToken:[],
    status:""
}


const adminSlice=createSlice({
    name:"superAdmin",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginAdmin.pending , (state)=>{
            state.status="loding";
        })
        .addCase(loginAdmin.fulfilled , (state,action)=>{
            state.adminLogin=action.payload;
        })
        .addCase(loginAdmin.rejected , (state)=>{
            state.status="rejected"
        })
    }
})


export default adminSlice.reducer;