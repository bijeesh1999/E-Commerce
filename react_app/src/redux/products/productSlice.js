import { createSlice } from "@reduxjs/toolkit";
import { getProducts,getProductById,postProduct,deleteProductById } from "./productApi";

const initialState = {
    products: [],
    singleProduct:[],
    postProduct:[],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = "failed";
            })

    // ====================================================================

            .addCase(getProductById.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.singleProduct = action.payload;
                // console.log(state.singleProduct);
            })
            .addCase(getProductById.rejected, (state) => {
                state.status = "Failed";
            })

    // =====================================================================

            .addCase(postProduct.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(postProduct.fulfilled, (state, action) => {
                state.postProduct = action.payload;
            })
            .addCase(postProduct.rejected, (state) => {
                state.status = "Failed";
            })

    // ======================================================================

    //         .addCase(deleteCategoryById.pending, (state) => {
    //             state.status = "Loading";
    //         })
    //         .addCase(deleteCategoryById.fulfilled, (state, action) => {
    //             state.deleteCategoryById = action.payload;
    //         })
    //         .addCase(deleteCategoryById.rejected, (state) => {
    //             state.status = "Failed";
    //         })
    },
});

export default productSlice.reducer;