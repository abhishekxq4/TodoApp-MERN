import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './createSlice';

const store = configureStore({
    reducer : {
        todos : todoSlice
    }
})

export default store;