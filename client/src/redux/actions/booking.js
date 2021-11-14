import { list } from "../../api/booking";

export const getListBookingAll = () => async (dispatch) => {
  const data = await list();
  console.log("data", data);

  if (data.success) {
    dispatch({
      type: "LIST_BOOKING",
      payload: data.booking,
    });
  }
};
