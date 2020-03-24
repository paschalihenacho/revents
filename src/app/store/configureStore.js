import { createStore } from "redux"
import { devToolEnhancer } from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";

export const configureStore = () => {
    const store = createStore(rootReducer, devToolEnhancer)

    return store;
}