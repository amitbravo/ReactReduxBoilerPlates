import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: 'user',
    initialState : {
        loggedin: false
    },
    reducers:  {
        LOGGEDIN: (state) => {
            state.loggedin = true
        },
        LOGGEDOUT: (state) => {
            state.loggedin = false
        }  
    }
})    


export const { loggedin, loggedout } = userSlice.actions

export default userSlice.reducer