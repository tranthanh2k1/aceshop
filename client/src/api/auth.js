import { API } from "../constants";

export const signup = (data) => {
  return fetch(`${API}/register`, {
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

export const signin = (data) => {
  return fetch(`${API}/login`, {
    method: "POST",
    headers: {
      Accept: "appliaction/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const signOut = (next) => {
  if(typeof window != "undefined"){
      localStorage.removeItem('user');
      next();
      return fetch(`${API}/logout`, {
          method: 'GET',
          headers:{
              "Content-Type": "application/json"
          }
      })
      .then(response => response.json())
      .catch(error => console.log(error))
  }
}
