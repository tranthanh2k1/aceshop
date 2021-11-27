import { signin } from "../../api/auth";

export const loginAction = (dataForm) => async (dispatch) => {
  const data = await signin(dataForm);

  if (data.success === true) {
    dispatch({
      type: "LOGIN",
      payload: {
        user: {
          infoUser: data.user,
          token: data.token,
        },
        message: data.message,
      },
    });
  } else {
    dispatch({
      type: "LOGIN_FAIL",
      payload: {
        error: data.message,
      },
    });
  }
};

export const saveUserLocalStorage = (user) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(user));

  dispatch({
    type: "SAVE_USER_LOCALSTORAGE",
  });
};

export const getUserLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return {
    type: "GET_USER_LOCALSTORAGE",
    // payload: data.infoUser,
  };
};
