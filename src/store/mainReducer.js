import { createSlice } from "@reduxjs/toolkit"


// or you name is mainSlice
const mainSlice = createSlice({
    name: 'main',
    initialState: {
        counts: 5
    },
    reducers: {
        increment: (state) => {
            state.counts = state.counts + 1
        },
        decrement: (state) => {
            state.counts = state.counts - 1
        },
        setNumber: (state, action) => {
            state.counts = action.payload
        }
    }

})

export const { increment, decrement, setNumber } = mainSlice.actions 

export default mainSlice.reducer