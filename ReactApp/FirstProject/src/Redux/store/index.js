import {combineReducers,createStore} from "redux";
import counter from "./reducer";

// combineReducers is a function which accepts and obj, it combines all reducers we defined into a single reducer because the architecture only allows single reducer.
const rootReducer = combineReducers({
    counter,
});

// store is a global box which contains all the reducers that are associated perticular global state
const store = createStore(rootReducer);

export default store;