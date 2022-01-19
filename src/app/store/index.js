import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./rootReducer";

export default function generateStore() {
    const store = createStore(reducers, compose(applyMiddleware(thunk)));
    return store;
}
