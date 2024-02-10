import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductById,
  postProduct,
  deleteProductById,
  editProduct,
  getProductsByCategory,
} from "./productApi";

const initialState = {
  products: [],
  singleProduct: [],
  postProduct: [],
  updatedData: [],
  delete: [],
  categoryProduct: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
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

      .addCase(deleteProductById.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.delete = action.payload;
      })
      .addCase(deleteProductById.rejected, (state) => {
        state.status = "Failed";
      })

      // =================================================================

      .addCase(editProduct.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.categoryProduct = action.payload;
      })
      .addCase(editProduct.rejected, (state) => {
        state.status = "Failed";
      })

      // =======================================================================

      .addCase(getProductsByCategory.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.categoryProduct = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.status = "Failed";
      });
  },
});

export default productSlice.reducer;
