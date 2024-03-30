import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {persistReducer, persistStore } from "redux-persist"; // step 1.  #reduxPersistImplemenation, import hooks
import storage from "redux-persist/lib/storage"; // step 2.  #reduxPersistImplemenation, reactJs defaults to localStorage 
//import AsyncStorage from '@react-native-async-storage/async-storage'  // step 2. #reduxPersistImplemenation , for react native, have to install npm dependency 

import mainSlice from './mainReducer'
import userSlice from './userReducer'

const reducers = combineReducers({
    main: mainSlice,
    user: userSlice
})

// step 3. #reduxPersistImplemenation define persist Configs
const persistConfig = {
    key: 'root',
    storage: storage, // or AsyncStorage for react native 
    whitelist: ["user"]
}

// step 4. #reduxPersistImplemenation create persistedReducer reducer from persistReducer func 
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer, // step 5. replace with normal reducer 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), // step 5. you may get a serialize error with reduxjs toolkit , serializableCheck has to be false

})
 // step 5.  #reduxPersistImplemenation, because we may need persistence only for specific reducers , probably thats why we need both stores , normal store , perisist store, we create both providers separately 
 // check router.jsx now 
export const persistor = persistStore(store)

