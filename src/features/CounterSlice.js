import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({

    name: 'counterapp',
    initialState: {
        count: 0,
    },
    reducers: {
        increament: (state,action) => {
            state.count += 1
        },
        decreament: (state,action) => {
            state.count -= 1
            {state.count<=0 ? state.count=0:state.count+=0}
        },
        reset: (state) => {
            state.count = 0
        },
        increamentByAmount: (state, action) => {
                state.count+= action.payload
        }
    }
}); 
export default counterSlice.reducer
export  const {increament,decreament,increamentByAmount,reset} =counterSlice.actions