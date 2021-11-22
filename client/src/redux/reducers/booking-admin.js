const initialState = {
  listBooking: [],
  detailBooking: null,
  message: "",
  error: "",
};

const bookingAdminReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LIST_ALL_BOOKING":
      return {
        ...state,
        listBooking: payload,
        detailBooking: null,
        message: "",
        error: "",
      };
    case "DETAIL_BOOKING":
      return {
        ...state,
        detailBooking: payload,
        message: "",
        error: "",
      };
    case "UPDATED_STATUS_BOOKING_ADMIN":
      return {
        ...state,
        listBooking: [...state.listBooking, payload.data],
        message: payload.message,
        error: "",
      };
    case "UDATED_STATUS_BOOKING_API_FAIL":
      return {
        ...state,
        message: "",
        error: payload,
      };
    default:
      return state;
  }
};

export default bookingAdminReducer;
