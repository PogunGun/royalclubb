import {createAction, createReducer, createSlice} from '@reduxjs/toolkit';

const initialState = {
    items:[],
    items2:[],
    items3:[],
    items4:[],
    isLoaded:false,
};


const element =(state=initialState,action)=>{
    if (action.type==='ADD_ELEMENT'){
            return {
                ...state,
                items:action.payload,
            }



    }
    if (action.type==='ADD_ELEMENT_2'){
        return {
            ...state,
            items2:action.payload,
        }


    }
    if (action.type==='ADD_ELEMENT_3'){
        return {
            ...state,
            items3:action.payload,
        }


    }
    if (action.type==='ADD_ELEMENT_4'){
        return {
            ...state,
            items4:action.payload,
        }


    }
    return state;
}

export default element;