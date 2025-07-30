import { createSlice } from "@reduxjs/toolkit";

const sellerItemSlice = createSlice({
    name: "sellerItem",
    initialState: {
        item: [],
        editingItem: null,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.item.push(newItem);
            }
        },
        removeItem: (state, action) => {
            state.item = state.item.filter(item => item.id !== action.payload);
        },
        setEditingItem: (state, action) => {
            state.editingItem = action.payload;
        },
        updateItem: (state, action) => {
            const index = state.item.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.item[index] = action.payload;
            }
        },
        clearEditingItem: (state) => {
            state.editingItem = null;
        }
    }
});

export const { addItem, removeItem, setEditingItem, updateItem, clearEditingItem } = sellerItemSlice.actions;
export default sellerItemSlice.reducer;