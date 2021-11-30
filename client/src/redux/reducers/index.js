import { combineReducers } from "redux";
import authReducer from "./auth";
import bookingAdminReducer from "./booking-admin";
import serviceReducer from "./services";
import userReducer from "./user"

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
  bookingAdmin: bookingAdminReducer,
  user: userReducer,
});

export default rootReducer;
