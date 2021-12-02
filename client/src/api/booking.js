import { API } from "../constants";
import { isAuthenticated } from "./auth";

const { token } = isAuthenticated();

export const listAllApi = (page) => {
  return fetch(`${API}/booking?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const detailBookingApi = (id) => {
  return fetch(`${API}/booking/detail/${id}`, {
    method: "GET",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const updateStatusAdminApi = (dataReq, id) => {
  return fetch(`${API}/booking/updateStatus/${id}`, {
    method: "PUT",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataReq),
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const listAllBookingStatusApi = (status) => {
  return fetch(`${API}/booking/status`, {
    method: "POST",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(status),
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
