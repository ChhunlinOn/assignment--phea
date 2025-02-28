import { configureStore } from "@reduxjs/toolkit";
import shoppingItem from "./shoppingSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer:{
        Shopping: shoppingItem,
        Username: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;