import { combineReducers } from "redux";

import rates from "./rates.js";

const reducer = combineReducers({
  rates: rates
});

export default reducer;
