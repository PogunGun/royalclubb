import  {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice/UserSlice';
import {composeWithDevTools} from "redux-devtools-extension";

import element from "./shopElement/shopReducer";
import {compose,applyMiddleware} from "redux";
import cart from "./shopElement/CartR";
import currentElem from "./slice/CurrentElem";
import gameReducer from './slice/CurrentElem'
const composeEnhancers = composeWithDevTools || compose;

export const store = configureStore({

    reducer: {
        user:userReducer,
        game:gameReducer,
        element,
        cart,


    },composeWithDevTools
});
window.store=store;