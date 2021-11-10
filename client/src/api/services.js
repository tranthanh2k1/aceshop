import { API } from "../constants";

export const list = () => {
  return fetch(`${API}/services`, {
    method: "GET",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const create = (data) => {
  return fetch(`${API}/service`, {
    method: "POST",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const update = (id, data) => {
  return fetch(`${API}/service/${id}`, {
    method: "PUT",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};

export const remove = (id) => {
  return fetch(`${API}/service/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
