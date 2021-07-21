import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;
//http://localhost:5000/api/
/* PROJECT ROUTES */
export const getAllUsers = () => {
  return axios.get(`${baseURL}/users`, { withCredentials: true });
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