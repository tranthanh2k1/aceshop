import { create, list, remove, update } from "../../api/services";

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

  dispatch({
    type: "DELETE_SERVICE",
    payload: {
      data: data.service,
      message: data.message,
    },
  });
};

export const updateServiceAction = (id, dataForm) => async (dispatch) => {
  const data = await update(id, dataForm);

  if (data.success) {
    dispatch({
      type: "UPDATE_SERVICE",
      payload: {
        data: data.updatedService,
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
