import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



export const getCategories = createAsyncThunk(
    'getCategoryData',
    async () => {
        const res = await axios.get(`http://localhost:8086/categories/`);
        //  console.log(res.data);
        return res.data;
    },
);

// export const getCategoryDataById = createAsyncThunk(
//     'getCategoryDataById',
//     async (id) => {
//         if (!id) {
//             return 0
//         }
//         const res = await axios.get(`http://localhost:8086/products/${id}`);
//         console.log(res.data);
//     },
// );

// export const postCategoryData = createAsyncThunk(
//     'postCategoryData',
//     async (data) => {
//         console.log(data);
//         // const res = await axios.post(`http://localhost:8086/products`, data);
//         // console.log(res.data);
//         // return res.data;
//     },
// );

// export const deleteCategoryById = createAsyncThunk(
//     'deleteCategoryById',
//     async () => {
//         const res = await axios.get(`http://localhost:8086/products/${id}`);
//         console.log(res);
//         return res.data;
    // },
// );