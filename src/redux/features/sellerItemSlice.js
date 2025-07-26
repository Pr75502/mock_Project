
import { createSlice } from "@reduxjs/toolkit";

const sellerItemSlice = createSlice({
    name: "sellerItem",
    initialState: {
        item: []
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.item.push(newItem);
            }
        }
    }
});

export const { addItem } = sellerItemSlice.actions;
export default sellerItemSlice.reducer;
