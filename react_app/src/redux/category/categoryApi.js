import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";



export const getCategories = createAsyncThunk(
    'getCategoryData',
    async () => {
        const response = await axios.get(`http://localhost:8086/categories`);
        // console.log(response);
        return response.data;
    },
);

export const updateCategory = createAsyncThunk(
    'updateCategory',
    async (data) => {
        console.log(data);
        if (!data) {
            res.status(400).json("error")
        }
        const res = await axios.put(`http://localhost:8086/categories/${data._id}`,{categoryName:data.categoryName});
        console.log(res);
    },
);

export const postCategoryData = createAsyncThunk(
    'postCategoryData',
    async (data) => {
        console.log(data);
        const res = await axios.post("http://localhost:8086/categories/",data);
        console.log(res);
        return res.data;
    },
);

export const deleteCategoryById = createAsyncThunk(
    'deleteCategoryById',
    async (id) => {
            const res = await axios.delete(`http://localhost:8086/categories/${id}`);
            console.log(res);
            return res.data;
        }
);