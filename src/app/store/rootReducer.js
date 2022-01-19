import { combineReducers } from "redux";
import ratesReducer from "../main/rates/store/reducers/index";
const rootReducer = combineReducers({
    rates: ratesReducer,
});

export default rootReducer;
