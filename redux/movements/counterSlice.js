import {createSlice} from '@reduxjs/toolkit'

const  initialState = {
    itemCounter : 0
}


const counterSlice = createSlice({
    name : 'movement',
    initialState,
    reducers: {
        increment : (state) => {
            state.itemCounter += 1
        },
        decrement : (state) => {
           if(state.itemCounter >= 1)  state.itemCounter -= 1
        }
    }

})

export const {increment,decrement} = counterSlice.actions

export default counterSlice.reducer