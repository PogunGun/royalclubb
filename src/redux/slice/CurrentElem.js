import {createSlice} from "@reduxjs/toolkit";


const addSlice  =createSlice({
    name: 'game',
    initialState:{
        currentElem:null,
    },
    reducers:{
        setCurrentElem:(state,action)=>{
            state.currentElem=action.payload;
        }
    }
})
export const {setCurrentElem}=addSlice.actions;
export default addSlice.reducer;