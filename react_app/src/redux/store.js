import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";
import productSlice from "./products/productSlice";
import userSlice from "./userAuth/userSlice";
import sellerSlice from "./sellerAuth/sellerSlice";
import orderSlice from "./order/orderSlice";
import superAdminSlice from "./superAdmin/superAdminSlice";


const store = configureStore({
    reducer:{
        product:productSlice,
        category:categorySlice,
        user:userSlice,
        seller:sellerSlice,
        order:orderSlice,
        admin:superAdminSlice
    }

})

export default store;