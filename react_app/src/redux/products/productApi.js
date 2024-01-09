import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const res = await axios.get(`http://localhost:8086/products/`);
        //  console.log(res.data);
        return res.data;
    },
);

export const getProductById = createAsyncThunk(
    'getProductById',
    async (id) => {
        if (!id) {
            return 0
        }
        const res = await axios.get(`http://localhost:8086/products/${id}`);
        return res.data;
        // console.log(res.data);

    },
);

export const postProduct = createAsyncThunk(
    'postProduct',
    async (formData) => {
        console.log(formData);
        const res = await axios.post(`http://localhost:8086/products`,formData);
        console.log(res.data);
        return res.data;
    },
);

// export const deleteProductById = createAsyncThunk(
//     'deleteCategoryById',
//     async () => {
//         const res = await axios.get(`http://localhost:8086/products/${id}`);
//         console.log(res);
//         return res.data;
    // },
// );