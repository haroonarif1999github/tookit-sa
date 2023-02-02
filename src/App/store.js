import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import ProductSlice from "../features/ProductSlice";
import ApiDataReducer from "../features/ApiThunkSlice";
export const store=configureStore({
    reducer:{
    counterapp:CounterSlice,
    products:ProductSlice,
    post:ApiDataReducer,
    },
 })