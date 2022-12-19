import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
}


const URL = "https://jsonplaceholder.typicode.com/posts"


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async(_, {rejectWithValue, dispatch}) => {
        const response = await axios.get(URL)
        dispatch(setPosts(response.data))
        console.log("fds", response.data)
    }
)

export const removePostsByID = createAsyncThunk(
    'posts/removePostsByID', async (id, {rejectWithValue, dispatch}) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePosts(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePosts: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    }, 
    extraReducers: {
        [getPosts.fulfilled]: () => console.log("fulfilled"),
        [getPosts.pending]: () => console.log("pending"), // Загрузка
        [getPosts.rejected]: () => console.log("rejected"), // Ошибка
        [removePostsByID.fulfilled]: () => console.log("fulfilled"),
        [removePostsByID.pending]: () => console.log("pending"), // Загрузка
        [removePostsByID.rejected]: () => console.log("rejected"), // Ошибка
    }, 

})

export const {setPosts, deletePosts} = postSlice.actions
export default postSlice.reducer