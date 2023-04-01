import { combineReducers } from "redux";
import { fetchReports, fetchTheApps, filterTheTable } from "./index";


export const rootReducer=combineReducers({
    reports:fetchReports,
    tableCols:filterTheTable,
    apps:fetchTheApps,
})