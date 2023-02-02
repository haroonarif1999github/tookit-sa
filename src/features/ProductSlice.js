import { createSlice } from "@reduxjs/toolkit";

export const productSlice=createSlice({
    name:'products',
    initialState:{
        users:[
            {id:1,name:'iphone',address:'sargodha'},
            {id:2 ,name:'samsung',address:'lahore'}
        ]
    }
   
})
export default productSlice.reducer;