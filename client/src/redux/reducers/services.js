const initialState = {
  listService: [],
  message: "",
  error: "",
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_SERVICES":
      return {
        ...state,
        listService: action.payload,
      };
    case "ADD_SERVICES":
      return {
        ...state,
        listService: [...state.listService, action.payload.data],
        message: action.payload.message,
        error: "",
      };
    case "DELETE_SERVICE":
      return {
        ...state,
        listService: state.listService.filter(
          (item) => item._id !== action.payload.data._id
        ),
        message: action.payload.message,
        error: "",
      };
    case "UPDATE_SERVICE":
      return {
        ...state,
        listService: [...state.listService, action.payload.data],
        message: action.payload.message,
        error: "",
      };
    case "CALL_API_SERVICES_FAIL":
      return {
        ...state,
        message: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default serviceReducer;
