import ATM_Reducer from "./ATM_Reducer";

import {combineReducers} from 'redux';

const Reducers = combineReducers({
    amount: ATM_Reducer
    //Multiple Reducers Are There 
})

export default  Reducers;