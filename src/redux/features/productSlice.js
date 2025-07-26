
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
    const response =await fetch("https://dummyjson.com/products")
    const data = await response.json()
    return data.products
})  

const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [], // Stores all fetched products
        products: [],    // Stores the currently displayed (filtered) products
        status: "idle",
        error: null,
        selectedCategory: "All", // Stores the currently selected category
        liveSearchProducts: [] // Stores products for live search suggestions
    },
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
            if (action.payload === "All") {
                state.products = state.allProducts;
            } else {
                state.products = state.allProducts.filter(product => product.category === action.payload);
            }
        },
        setSearchTerm: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.products = state.allProducts.filter(product => 
                product.title.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)
            );
        },
        setLiveSearchTerm: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm) {
                state.liveSearchProducts = state.allProducts.filter(product => 
                    product.title.toLowerCase().includes(searchTerm) || 
                    product.category.toLowerCase().includes(searchTerm)
                );
            } else {
                state.liveSearchProducts = [];
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading"
                
            })
            .addCase(fetchProducts.fulfilled, (state,action) => {
                state.status = "success"
                state.allProducts = action.payload;
                state.products = action.payload;
        })
            .addCase(fetchProducts.rejected, (state,action) => {
                state.status = "failed"
                state.error=action.error.message
        })
    }
})
export const { setCategory, setSearchTerm, setLiveSearchTerm } = productSlice.actions



export default productSlice.reducer