import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './movements/counterSlice'


const store =  configureStore({
    reducer :{
        counter :counterSlice
    }
})

export default store