/* global sessionStorage */
/* eslint no-undef: "error" */

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL,
});

// User Functions
const getUser = userId => apiClient
  .get(`api/v1/user/${userId}`, {
    headers: {
      Authorization: `${sessionStorage.jwt}`,
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.response.data);
  });

const getCurrentUser = () => apiClient.get('api/v1/auth', {
  headers: {
    Authorization: sessionStorage.jwt,
  },
});

const getUsers = () => apiClient.get('api/v1/users').then(results => results.data);

const createUser = data => apiClient.post('api/v1/auth', {
  user: {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
  },
});

const adminEditUser = (data, userId) => apiClient
  .patch(`api/v1/users/${userId}`, {
    first_name: data.firstName.value,
    last_name: data.lastName.value,
    email: data.email.value,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.response.data);
  });

// Recipe Functions
const getRecipe = id => apiClient.get(`api/v1/recipes/${id}`);

const getRecipes = (search) => {
  const query = search ? `?search=${search}` : '';
  return apiClient.get(`api/v1/recipe${query}`).then(results => results.data);
};

// Password Functions
const loginUser = (data) => {
  const credentials = { email: data.email, password: data.password };
  return apiClient.post('api/v1/auth/login', {
    user: credentials,
  });
};

const requestPasswordReset = email => apiClient.post('/api/v1/password', {
  user: {
    email,
  },
});

const resetPassword = (password, resetPasswordToken) => apiClient.put('/api/v1/password', {
  user: {
    password,
    reset_password_token: resetPasswordToken,
  },
});

export default apiClient;

export {
  adminEditUser,
  createUser,
  getCurrentUser,
  getRecipe,
  getRecipes,
  getUser,
  getUsers,
  loginUser,
  resetPassword,
  requestPasswordReset,
};
