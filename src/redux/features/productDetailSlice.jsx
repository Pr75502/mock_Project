
import { createSlice } from "@reduxjs/toolkit";

const ProductDetailSlice = createSlice({
    name: "productDetails",
    initialState: {
        details:{}
    },
    reducers: {
        viewDetails: (state, action) => {
            state.details=action.payload
        }
    }
})


export default ProductDetailSlice.reducer
export const  {viewDetails}=ProductDetailSlice.actions