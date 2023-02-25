import { cakeActions } from '../cake/cakeSlice'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfIC: 100
}

const creamSlice = createSlice({
    name: 'Ice Cream',
    initialState,
    reducers: {
        ordered : (state) => {
            state.numOfIC--
        },
        restocked : (state,action) => {
            state.numOfIC+=action.payload
        }
    },
    /* extraReducers: { //used to access another slices action extraReducer can be an object or function but function with builder is prefereed bcz it avoids dependency on string literal
        ['cake/ordered'] : (state,action) => {
            if (action.payload>=2){
                state.numOfIC--
            }
        }
    } */
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state,action)=>{
            if(action.payload>=2){
                state.numOfIC--
            }
        })
    }
})

export default creamSlice.reducer
export const creamActions = creamSlice.actions