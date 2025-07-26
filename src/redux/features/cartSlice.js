
import {createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name: "cart",
    initialState: {
    cart: []
    },
    reducers: {

        addToCart: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

       removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },

        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },

        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        }

    }
  
})
export const { addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions

export default cartSlice.reducer
