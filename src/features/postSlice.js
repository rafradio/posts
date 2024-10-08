import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { userLoggedOut } from './auth/authSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialReactions = {
    thumbsUp: 0,
    tada: 0,
    heart: 0,
    rocket: 0,
    eyes: 0
}

const initialState =  [
    { id: '1', title: 'First Post!', user: '0', content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString(), reactions: initialReactions, },
    { id: '2', title: 'Second Post', user: '2', content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString(), reactions: initialReactions, },
    { id: '3', title: 'Third Post', user: '0', content: 'More text', date: sub(new Date(), { minutes: 8 }).toISOString(), reactions: initialReactions, },
];



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                  payload: { id: nanoid(), title, user: userId, content, date: new Date().toISOString(), reactions: initialReactions, }
                }
              }
        },
        postUpdated: (state, action) => {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
              }
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(userLoggedOut, (state) => {
    //         return []
    //     })
    // },
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
  })

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer