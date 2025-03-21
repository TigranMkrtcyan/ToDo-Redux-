import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk";

import ToDoReducer from "./reducers/ToDoReducer";

const reducers = combineReducers({
    ToDoReducer
})

const store = createStore(reducers,applyMiddleware(thunk))

export default store