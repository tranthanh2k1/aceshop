import { combineReducers } from "redux";
import authReducer from "./auth";
import serviceReducer from "./services";

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
});

export default rootReducer;
