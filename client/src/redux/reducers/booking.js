const initialState = {
  listBooking: [],
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LIST_BOOKING":
      return {
        ...state,
        listBooking: payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
