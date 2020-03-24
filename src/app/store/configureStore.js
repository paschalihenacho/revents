import { createStore } from "redux"
import testReducer from "../../features/testarea/testReducer";

export const configureStore = () => {
    const store = createStore(testReducer)

    return store;
}