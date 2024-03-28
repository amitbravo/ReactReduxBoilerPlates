export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET = 'SET'

const initialState = {
    counts: 5
}

const mainReducer = (state = initialState, action) => {

    switch(action.type) {

        case INCREMENT:
            return {...state, counts: state.counts + 1}

        case DECREMENT:
            return {...state, counts: state.counts + 1}    

        case SET:
            return {...state, counts: action.payload}
            
         default:
            return {...state}   
    }

}

export default mainReducer