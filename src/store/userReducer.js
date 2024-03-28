

const initialState = {
    loggedin: false
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'LOGGEDIN':
            return {...state, loggedin: true}

        case 'LOGGEDOUT':
            return {...state, loggedin: false}    

         default:
            return {...state}   
    }

}

export default userReducer