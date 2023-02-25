import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

//createAsyncThunk automatically generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('User/fetchUsers', async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    let idArray = response.data
    return idArray
}) //first argument is action type

const userSlice = createSlice({
    name: 'userany',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state=>{
            state.loading = true
            state.error = ''
            state.data = []
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.error.message ? action.error.message:''
        })
    }
})

export default userSlice.reducer