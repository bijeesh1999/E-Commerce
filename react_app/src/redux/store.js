import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./products/productSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
    reducer:{
        product:productSlice,
        category:categorySlice,
        cart:cartSlice,
    }

})

export default store;