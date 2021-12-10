const initialState = {
    listUser: [],
    message: "",
    err: "",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_USERS":
            return {
                ...state,
                listUser: action.payload,
            };
        case "ADD_USERS":
            return {
                ...state,
                listUser: [...state.listUser, action.payload.data],
                message: action.payload.message,
                error: "",
            };
        case "DELETE_USERS":
            return {
                ...state,
                listUser: state.listUser.filter(
                    (item) => item._id !== action.payload._id
                ),
                error: "",
                message: ""
            };
        case "UPDATE_USERS":
            return {
                ...state,
                listUser: [
                    ...state.listUser,
                    action.payload.data
                ],
                message: action.payload.message,
                error: "",
            };
        case "CALL_API_USERS_FAIL":
            return {
                ...state,
                message: "",
                error: action.payload,
            };
        default:
            return state;
    }
}

export default userReducer;