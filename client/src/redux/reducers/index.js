import { combineReducers } from "redux";
import authReducer from "./auth";
import bookingAdminReducer from "./booking-admin";
import serviceReducer from "./services";

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
  bookingAdmin: bookingAdminReducer,
});

export default rootReducer;
