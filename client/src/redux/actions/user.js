import { create, list, update, remove } from "../../api/user";

export const createUserAction = (dataForm) => async (dispatch) => {
    const data = await create(dataForm);
    if (data.success) {
        dispatch({
            type: "ADD_USERS",
            payload: {
                data: data.service,
                message: data.message,
            },
        });
    } else {
        dispatch({
            type: "CALL_API_USERS_FAIL",
            payload: data.message,
        });
    }
};

export const listUserAction = () => async (dispatch) => {
    const data = await list();

    dispatch({
        type: "LIST_USERS",
        payload :data.listUserParent,
    });
};

export const removeUserAction = (id) => async (dispatch) => {
    const data = await remove(id);

    dispatch({
        type: "DELETE_USERS",
        payload:{
            data: data.user,
            message : data.message,
        },
    });
};

export const updateUserAction = (id, dataForm) => async (dispatch) => {
    const data = await update(id, dataForm);
    if (data.success) {
        dispatch({
            type: "UPDATE_USERS",
            payload: {
                data: data.updateUser,
                message : data.message,
            },
        });
    } else {
        dispatch({
            type :"CALL_API_USERS_FAIL",
            payload: data.message,
        });
    }
};