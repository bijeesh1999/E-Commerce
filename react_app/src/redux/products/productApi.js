import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const res = await axios.get(`http://localhost:8086/products/`);
        return res.data;
    },
);

export const getProductById = createAsyncThunk(
    'getProductById',
    async (id) => {
        if (!id) {
            return 0
        }
        const getOneData = await axios.get(`http://localhost:8086/products/${id}`);
        return getOneData.data;
        // console.log(res.data);

    },
);

// ============================================================================

export const postProduct = createAsyncThunk(
    'postProduct',
    async (formData) => {
        console.log(formData);
        const newData = await axios.post(`http://localhost:8086/products`,formData);
        console.log(newData.data);
        return newData.data;
    },
);

// ================================================================================

export const deleteProductById = createAsyncThunk(
    'deleteProductById',
    async (id) => {
            const res = await axios.delete(`http://localhost:8086/products/${id}`);
            console.log(res);
            return res.data;
    },
);

// ===================================================================================


export const editProduct = createAsyncThunk(
    'editProduct',
    async ({id,formData}) => {
        // const {id , formData}=data
        // console.log("+++",id);
        // console.log(formData);
        const res = await axios.put(`http://localhost:8086/products/${id}`,formData);
        console.log(res.data);
        return res.statusText;
    },
);