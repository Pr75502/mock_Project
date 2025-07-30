import { configureStore,combineReducers } from '@reduxjs/toolkit';
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import productDetailReducer from "../features/productDetailSlice";
import userReducer from "../features/userSlice";
import sellerItemReducer from '../features/sellerItemSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    productDetails: productDetailReducer,
    sellerItem: sellerItemReducer
});


const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);

