import { combineReducers, createStore, compose } from "redux";
import mainReducer from './mainReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
    main: mainReducer,
    user: userReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(reducers, composeEnhancers())