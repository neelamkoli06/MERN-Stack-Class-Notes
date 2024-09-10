import { applyMiddleware, createStore } from "redux";
import Reducers from "./Reducers";
import { thunk } from 'redux-thunk';

const Store = createStore(Reducers, {}, applyMiddleware(thunk))




// @deprecated
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.


export default Store;