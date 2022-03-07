import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedInReducer from "./isLoggedIn";
const allReducers = combineReducers({
    counterReducer,
    isLoggedInReducer
})

export default allReducers;