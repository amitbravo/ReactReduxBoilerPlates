import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";


import mainSlice from './mainReducer'
import userSlice from './userReducer'

const reducers = combineReducers({
    main: mainSlice,
    user: userSlice
})

// I did not include redux dev tools as its added as default in reduxjs toolkit
export const store = configureStore({
    reducer: reducers,
    
})
