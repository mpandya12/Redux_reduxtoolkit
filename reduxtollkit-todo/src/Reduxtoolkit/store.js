import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from "./Todoslice";

const store = configureStore({
    text:TodoReducer,
    devTools: process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()

})

export default store;