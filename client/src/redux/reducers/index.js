import { combineReducers } from "redux";
import authReducer from "./auth";
import bookingReducer from "./booking";
import serviceReducer from "./services";

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
  booking: bookingReducer,
});

export default rootReducer;
