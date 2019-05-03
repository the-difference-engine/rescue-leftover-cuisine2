/* global sessionStorage */
/* eslint no-undef: "error" */

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL,
});

// TODO: add methods to wrap API endpoints

const getRecipes = (search) => {
  const query = search ? `?search=${search}` : '';
  return apiClient.get(`api/v1/recipe${query}`)
    .then(results => results.data);
};

const createUser = data => apiClient.post('api/v1/user', {
  user: {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
  },
});

const loginUser = (data) => {
  const credentials = { email: data.email, password: data.password };
  return apiClient.post('api/v1/auth/login', {
    user: credentials,
  });
};

const getUser = userId => apiClient.get(`api/v1/user/${userId}`, {
  headers: {
    Authorization: `${sessionStorage.jwt}`,
  },
}).then((response) => {
  console.log(response);
})
  .catch((error) => { console.log(error.response.data); });

const getUsers = () => apiClient.get('api/v1/user')
  .then(results => results.data)
;

export default apiClient;
export {
  getRecipes, createUser, loginUser, getUser, getUsers,
};
