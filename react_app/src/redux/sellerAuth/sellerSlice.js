import { createSlice } from "@reduxjs/toolkit";
import { sellerLogin , sellerRegister , getSellers } from "./sellerApi";
const sellerToken = localStorage.getItem("sellerToken");
let sellerId = localStorage.getItem("sellerId");

const initialState = {
    logedSeller: [],
    sellerRegister:[],
    sellerLogout:[],
    allSellers:[],
    sellerToken:sellerToken,
    sellerId:sellerId,
    status: 'idle',
};

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sellerLogin.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(sellerLogin.fulfilled, (state, action) => {
                state.status = "success";
                state.logedSeller = action.payload;
            })
            .addCase(sellerLogin.rejected, (state) => {
                state.status = "failed";
            })

    // ====================================================================

            .addCase(getSellers.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getSellers.fulfilled, (state, action) => {
                state.allSellers = action.payload;
                // console.log(state.singleProduct);
            })
            .addCase(getSellers.rejected, (state) => {
                state.status = "Failed";
            })

    // =====================================================================

            .addCase(sellerRegister.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(sellerRegister.fulfilled, (state, action) => {
                state.sellerRegister = action.payload;
            })
            .addCase(sellerRegister.rejected, (state) => {
                state.status = "Failed";
            })

    // ======================================================================
    },
});

export default sellerSlice.reducer;