import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import productDetailReducer from "../features/productDetailSlice";
import userReducer from "../features/userSlice";
import sellerItemReducer from '../features/sellerItemSlice';

const persistedState = (() => {
    try {
        const serializedState = localStorage.getItem('state');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        console.warn('Could not load state from localStorage.', e);
        return undefined;
    }
})();

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
    try {
        localStorage.setItem('state', JSON.stringify(store.getState()));
    } catch (e) {
        console.warn('Could not save state to localStorage.', e);
    }
});