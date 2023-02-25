import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import cakeReducer from './cake/cakeSlice'
import creamReducer from './icecream/creamSlice'
import userReducer from './user/userSlice'


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        cream: creamReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    }
})

export default store