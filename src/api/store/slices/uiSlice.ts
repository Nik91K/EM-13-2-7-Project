import type { UserType } from "../../../types/User";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type UiSliceType = {
    loading: Record<string, boolean>
    error: Record<string, string | null>
}

const initialState: UiSliceType = {
  loading: {},
  error: {}
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{key:string, value:boolean}>) => {
        state.loading[action.payload.key] = action.payload.value;
    }
  }
})


export const { setLoading } = uiSlice.actions
export default uiSlice.reducer
