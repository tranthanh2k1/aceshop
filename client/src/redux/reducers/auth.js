const initialState = {
  isAuthenticated: false,
  error: "",
  success: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "LOGIN":
      return state;
    case "LOGOUT":
      return state;
    default:
      return state;
  }
};

export default authReducer;
