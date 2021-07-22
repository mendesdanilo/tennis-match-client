import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//http://localhost:5000/api/
/* PROJECT ROUTES */

export const getAllUsers = () => {
  return axios.get(`${baseURL}/users`, { withCredentials: true });
};

export const getUser = (userId) => {
  return axios.get(`${baseURL}/users/${userId}`);
};

export const addFavorite = (userId) => {
  return axios.post(`${baseURL}/user/${userId}/addFavorite`, null, {
    withCredentials: true,
    // null porque a funcao espera 3 argumentos, url, body e with credentials
  });
};

/*AUTHENTICATION API ROUTES*/

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get(`${baseURL}/loggedin`, { withCredentials: true });
};

export const logout = () => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};
