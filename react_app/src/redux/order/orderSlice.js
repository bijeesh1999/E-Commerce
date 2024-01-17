import { createSlice } from "@reduxjs/toolkit";
import { getAllOrder,getOneOrder } from "./orderApi";

const initialState = {
    allOrder: [],
    singleOrder:[],
    status: 'idle',
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrder.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getAllOrder.fulfilled, (state, action) => {
                // state.status = "success";
                state.allOrder = action.payload;
            })
            .addCase(getAllOrder.rejected, (state) => {
                state.status = "failed";
            })

    // =====================================================================

            .addCase(getOneOrder.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getOneOrder.fulfilled, (state, action) => {
                state.singleOrder = action.payload;
    
            })
            .addCase(getOneOrder.rejected, (state) => {
                state.status = "Failed";
            })

    // ======================================================================

            // .addCase(deleteCategoryById.pending, (state) => {
            //     state.status = "Loading";
            // })
            // .addCase(deleteCategoryById.fulfilled, (state, action) => {
            //     state.deleted = action.payload;
            // })
            // .addCase(deleteCategoryById.rejected, (state) => {
            //     state.status = "Failed";
            // })
    },
});

export default orderSlice.reducer;