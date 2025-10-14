import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
import usersSlice from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
