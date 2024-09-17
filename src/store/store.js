import { configureStore, combineReducers } from '@reduxjs/toolkit';
import postsReducer from '../features/postSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: userReducer
    },
});