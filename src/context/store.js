import { legacy_createStore, combineReducers } from "redux";

const reducers = combineReducers({});

export const store = legacy_createStore(reducers);
