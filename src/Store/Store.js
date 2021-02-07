import { createStore, combineReducers } from "redux";

import data from "../Reducer/Form";

const rootReducer = combineReducers({
    data,
});

const Store = createStore(rootReducer);

export default Store;