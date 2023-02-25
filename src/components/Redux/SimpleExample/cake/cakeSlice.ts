import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({ //it returns an object that has actions and the main reducer function
    name: 'cake', //this name only helps with debugging
    initialState,
    reducers: {
        ordered: (state, action) => { //actions are auto-created using the key name
            if(!action.payload)
            state.numOfCakes-- //we can directly mutate because it uses immer within itself & dont return, just modify
            else state.numOfCakes-=action.payload
        },
        restocked: (state,action) => {
            state.numOfCakes+=action.payload 
        }
    }
})

export default cakeSlice.reducer
export const cakeActions = cakeSlice.actions //named exports should go after default export