import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./products/productSlice";
import userSlice from "./userAuth/userSlice";
import sellerSlice from "./sellerAuth/sellerSlice";
import orderSlice from "./order/orderSlice";

const store = configureStore({
    reducer:{
        product:productSlice,
        category:categorySlice,
        user:userSlice,
        seller:sellerSlice,
        order:orderSlice
    }

})

export default store;