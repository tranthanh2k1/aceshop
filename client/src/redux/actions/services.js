import { create, list, remove } from "../../api/services";

export const createServiceAction = (dataForm) => async (dispatch) => {
  const data = await create(dataForm);

  if (data.success) {
    dispatch({
      type: "ADD_SERVICES",
      payload: {
        data: data.service,
        message: data.message,
      },
    });
  } else {
    dispatch({
      type: "CALL_API_SERVICES_FAIL",
      payload: data.message,
    });
  }
};

export const listServiceAction = () => async (dispatch) => {
  const data = await list();

  dispatch({
    type: "LIST_SERVICES",
    payload: data.listServiceParent,
  });
};

export const removeServiceAction = (id) => async (dispatch) => {
  const data = await remove(id);
  console.log("dataaction", data);

  dispatch({
    type: "DELETE_SERVICE",
    payload: {
      data: data.service,
      message: data.message,
    },
  });
};
