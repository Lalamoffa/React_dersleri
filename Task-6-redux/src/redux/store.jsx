import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice';
import userReduser from '../redux/userSlice'

export const store =  configureStore({
    reducer: {
        counter:  counterReducer,
        user: userReduser

    }
})
