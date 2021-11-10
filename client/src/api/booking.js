import { API } from "../constants";

export const list = () => {
  return fetch(`${API}/booking`, {
    method: "GET",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
};
