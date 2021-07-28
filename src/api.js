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

export const allFavorites = () => {
  return axios.get(`${baseURL}/favorites`, { withCredentials: true });
};

export const allMatches = () => {
  return axios.get(`${baseURL}/matches`, { withCredentials: true });
};

//profile
export const getProfile = () => {
  return axios.get(`${baseURL}/currentuser`, {
    withCredentials: true,
    // null porque a funcao espera 3 argumentos, url, body e with credentials
  });
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

export const updateProfile = (updatedProfile) => {
  return axios.put(`${baseURL}/profile/${updatedProfile.id}`, updatedProfile);
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
