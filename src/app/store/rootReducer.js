import { combineReducers } from "redux";
import ratesReducer from "../main/rates/store/reducers/index";
import dashboardReducer from "../dashboard/store/reducers"

const rootReducer = combineReducers({
    rates: ratesReducer,
    dashboard: dashboardReducer
});

export default rootReducer;
