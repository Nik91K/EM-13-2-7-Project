import type { Product } from "../../../types/ProductCard";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../axios";
import { setLoading } from "./uiSlice";

type ProductsSliceType = {
    products: Product[]
    error: string | null
}

const initialState: ProductsSliceType = {
    products: [],
    error: null
}

export const getProducts = createAsyncThunk<Product[]>('/products/getProducts',
    async (_) => {
        const response = await customAxios.get<Product[]>('/products')
        return response.data
    }
)

export const getProductById = createAsyncThunk<Product, number>('/products/getProductById',
    async (id) => {
        const response = await customAxios.get<Product>(`/products/${id}`)
        return response.data
    }
)

const productsSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch all
        builder.addCase(getProducts.pending, (state) => {
            setLoading({key: "products", value:true});
            state.error = null
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            setLoading({key: "products", value:false});
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            setLoading({key: "products", value:false});
            state.error = action.error.message || 'Failed to fetch products'
        })
        // Fetch by ID
        builder.addCase(getProductById.pending, (state) => {
            //state.loading = true
            state.error = null
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            //state.loading = false
            const index = state.products.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state.products[index] = action.payload
            } else {
                state.products.push(action.payload)
            }
        })
        builder.addCase(getProductById.rejected, (state, action) => {
            //state.loading = false;
            state.error = action.error.message || 'Failed to fetch product'
        })
    }
})

export default productsSlice.reducer
