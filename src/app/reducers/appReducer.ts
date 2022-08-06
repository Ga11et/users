import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersApi } from '../../servises/usersApi';


const initialState = {
  search: '',
  token: '',
  isAuth: false,
  error: ''
}

export const appSlice = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
        changeSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        logout: (state) => {
          state.isAuth = false
          state.token = ''
          state.error = ''
          state.search = ''
        }
    },
    extraReducers(builder) {
      builder.addMatcher(
        usersApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.accessToken
          state.isAuth = true
        }
      )
      builder.addMatcher(
        usersApi.endpoints.login.matchRejected,
        (state, { payload }) => {
          if (payload) state.error = payload.data as string
        }
      )
    },
})

export default appSlice.reducer