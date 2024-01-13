import { createSlice } from "@reduxjs/toolkit";
import { getCategories,updateCategory,postCategoryData,deleteCategoryById } from "./categoryApi";

const initialState = {
    categories: [],
    postCategory:[],
    deleted:[],
    update:[],
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

            .addCase(updateCategory.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.update = action.payload;
            })
            .addCase(updateCategory.rejected, (state) => {
                state.status = "Failed";
            })

    // =====================================================================

            .addCase(postCategoryData.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(postCategoryData.fulfilled, (state, action) => {
                state.postCategory = action.payload;
    
            })
            .addCase(postCategoryData.rejected, (state) => {
                state.status = "Failed";
            })

    // ======================================================================

            .addCase(deleteCategoryById.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(deleteCategoryById.fulfilled, (state, action) => {
                state.deleted = action.payload;
            })
            .addCase(deleteCategoryById.rejected, (state) => {
                state.status = "Failed";
            })
    },
});

export default categorySlice.reducer;