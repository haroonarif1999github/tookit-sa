import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const ApiData=createAsyncThunk("posts/ApiData",async()=>{
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
});

const ApiThunkSlice=createSlice(({
    name:'posts',
    initialState:{
        posts:[],
        loading:false,
    },
    reducers:{},
    extraReducers: {
        [ApiData.pending]:(state,action)=>{
            state.loading=true;
        },
        [ApiData.fulfilled]:(state,action)=>{
            state.loading=false;
            state.posts=action.payload;
        },
        [ApiData.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
}))
export default ApiThunkSlice.reducer;