import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type Locale = "EN" | "UA";
export type Theme = "L" | "D"

type UserLocalDataSliceType = {
    theme: Theme
    locale: Locale
}

function loadUserData(): UserLocalDataSliceType
{
    const data = localStorage.getItem("userLocalData");

    if(data) {
        return JSON.parse(data);
    } 

    return {
        theme: "L",
        locale: "UA"
    }
}

function saveUserData(state:UserLocalDataSliceType)
{
    localStorage.setItem("userLocalData", JSON.stringify(state));
}

const initialState = loadUserData();

const userLocalDataSlice = createSlice({
  name: 'userLocalData',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
        state.theme = action.payload;
        saveUserData(state);
    },
    setLocale: (state, action: PayloadAction<Locale>) => {
        state.locale = action.payload;
        saveUserData(state);
    }
  }
})

export const { setTheme, setLocale } = userLocalDataSlice.actions
export default userLocalDataSlice.reducer
