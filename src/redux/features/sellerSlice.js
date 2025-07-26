import { createSlice } from "@reduxjs/toolkit";


const sellerSlice = createSlice({
    name: "seller",
    initialState: {
        sellerItems:[]
    },
    reducers: {
        setProducts: (state,action) => {
            state.sellerItems.push(action.payload)
        },
        removeProducts: (state, action) => {
            state.sellerItems = state.sellerItems.filter(item=>item.id!==action.payload)
        },
        updateproducts: (state, action) => {
            const index = state.sellerItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.sellerItems[index] = { ...state.sellerItems[index], ...action.payload };
            }
        }
    }
})
export default sellerSlice.reducer
export const {setProducts,removeProducts,updateproducts} = sellerSlice.actions