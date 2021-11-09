const initialState = {
  isAuthenticated: false,
  user: null,
  message: "",
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        message: action.payload.message,
        error: "",
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        message: "",
        error: action.payload.error,
      };
    case "SAVE_USER_LOCALSTORAGE":
      return {
        ...state,
      };
    case "GET_USER_LOCALSTORAGE":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        message: "",
        error: "",
      };
    case "LOGOUT":
      return state;
    default:
      return state;
  }
};

export default authReducer;
