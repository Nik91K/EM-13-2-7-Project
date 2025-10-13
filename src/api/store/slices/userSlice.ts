import type { UserType } from "../../../types/User";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../axios";

type UserSliceType = {
  users: UserType[]
  loading: boolean
  error: string | null
}

const initialState: UserSliceType = {
  users: [],
  loading: false,
  error: null
}

export const createUser = createAsyncThunk<UserType, Omit<UserType, 'id'>>(
  'users/createUser',
  async (userData) => {
    const response = await customAxios.post<UserType>('/users', userData)
    return response.data
  }
)

export const getUserById = createAsyncThunk<UserType, number>(
  'users/getUserById',
  async (id) => {
    const response = await customAxios.get<UserType>(`/users/${id}`)
    return response.data
  }
)

export const updateUser = createAsyncThunk<UserType, UserType>(
  'users/updateUser',
  async (userData) => {
    const response = await customAxios.put<UserType>(`/users/${userData.id}`, userData)
    return response.data
  }
)

export const deleteUserById = createAsyncThunk<void, number>(
  'users/deleteUserById',
  async (id) => {
    await customAxios.delete(`/users/${id}`)
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create
    builder.addCase(createUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false
      state.users.push(action.payload)
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to create user'
    })

    // Get a single user
    builder.addCase(getUserById.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false
      const exists = state.users.find(user => user.id === action.payload.id)
      if (!exists) {
        state.users.push(action.payload)
      }
    })
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to get user'
    })

    // Update
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to update user'
    })

    // Delete
    builder.addCase(deleteUserById.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(deleteUserById.fulfilled, (state, action) => {
      state.loading = false
      state.users = state.users.filter(user => user.id !== action.meta.arg)
    })
    builder.addCase(deleteUserById.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Failed to delete user'
    })
  }
})

export default usersSlice.reducer