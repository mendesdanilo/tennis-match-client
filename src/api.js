import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;
//http://localhost:5000/api/
/* PROJECT ROUTES */
export const getAllUsers = () => {
  return axios.get(`${baseURL}/users`);
};

/*AUTHENTICATION API ROUTES*/

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user);
};
