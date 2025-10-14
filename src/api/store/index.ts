import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
import usersSlice from "./slices/userSlice"
import uiReducer from "./slices/uiSlice"
import userLocalDataReducer from "./slices/userLocalDataSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: usersSlice,
    ui: uiReducer,
    userLocalData: userLocalDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
