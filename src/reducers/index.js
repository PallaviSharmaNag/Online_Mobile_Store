import { combineReducers } from "redux";

import mobiles from "./mobiles_reducer";
import isLogged from "./logged_reducer";
import login from "./login_reducer";

const rootReducer = combineReducers({
  mobiles,
  isLogged,
  login
});

export default rootReducer;
