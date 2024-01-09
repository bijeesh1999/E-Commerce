import { createSlice } from "@reduxjs/toolkit";
import { getCategories,getCategoryDataById,postCategoryData,deleteCategoryById } from "./categoryApi";

const initialState = {
    categories: [],
    status: 'idle',
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                // state.status = "success";
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state) => {
                state.status = "failed";
            })

    // ====================================================================

    //         .addCase(getCategoryDataById.pending, (state) => {
    //             state.status = "Loading";
    //         })
    //         .addCase(getCategoryDataById.fulfilled, (state, action) => {
    //             state.getCategoryDataById = action.payload;
    //         })
    //         .addCase(getCategoryDataById.rejected, (state) => {
    //             state.status = "Failed";
    //         })

    // =====================================================================

            // .addCase(postCategoryData.pending, (state) => {
            //     state.status = "Loading";
            // })
            // .addCase(postCategoryData.fulfilled, (state, action) => {
            //     state.postCategoryData = action.payload;
            // })
            // .addCase(postCategoryData.rejected, (state) => {
            //     state.status = "Failed";
            // })

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

export default categorySlice.reducer;