import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import productDetailReducer from "../features/productDetailSlice";
import userReducer from "../features/userSlice";
import sellerItemReducer from '../features/sellerItemSlice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // Ignore write errors
    }
};

const persistedState = loadState();

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        user: userReducer,
        productDetails: productDetailReducer,
        sellerItem: sellerItemReducer
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveState(store.getState());
});



