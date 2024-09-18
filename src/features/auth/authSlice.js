import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = {
    username: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      userLoggedIn: (state, action) => {
        state.username = action.payload
        console.log("author = ", state.username);
      },
      userLoggedOut: (state) => {
        state.username = null
      }
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions

export default authSlice.reducer