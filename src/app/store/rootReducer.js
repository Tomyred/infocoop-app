import { combineReducers } from "redux";
import ratesReducer from "../main/rates/store/reducers/ratesReducer";
import keypadReducer from "../main/keypad/store/reducers/keypadReducer";
import dashboardReducer from "../dashboard/store/reducers";

const rootReducer = combineReducers({
    rates: ratesReducer,
    dashboard: dashboardReducer,
    keypad: keypadReducer,
});

export default rootReducer;
