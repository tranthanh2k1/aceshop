import {
  detailBookingApi,
  listAllApi,
  updateStatusAdminApi,
} from "../../api/booking";

export const getListBookingAll = (page) => async (dispatch) => {
  const data = await listAllApi(page);

  if (data.success) {
    dispatch({
      type: "LIST_ALL_BOOKING",
      payload: { data: data.booking, totalPage: data.totalPage },
    });
  }
};

export const detaiBookingAction = (id) => async (dispatch) => {
  const data = await detailBookingApi(id);

  dispatch({
    type: "DETAIL_BOOKING",
    payload: data.detailBooking,
  });
};

export const updateStatusBookingAdminAction =
  (dataReq, id) => async (dispatch) => {
    const data = await updateStatusAdminApi(dataReq, id);
    console.log(data);

    if (data.success) {
      dispatch({
        type: "UPDATED_STATUS_BOOKING_ADMIN",
        payload: {
          data: data.updatedStatusBookingAdmin,
          message: data.message,
        },
      });
    } else {
      dispatch({
        type: "UDATED_STATUS_BOOKING_API_FAIL",
        payload: data.message,
      });
    }
  };
