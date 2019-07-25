/* global sessionStorage */
/* eslint no-undef: "error" */

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL,
});

const getRecipes = (search) => {
  const query = search ? `?search=${search}` : '';
  return apiClient.get(`api/v1/recipe${query}`).then(results => results.data);
};

const createUser = data => apiClient.post('api/v1/auth', {
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

const getUsers = () => apiClient.get('api/v1/users').then(results => results.data);

// CURRENT USER
const getCurrentUser = () => apiClient.get('api/v1/auth', {
  headers: {
    Authorization: sessionStorage.jwt,
  },
});

// Reset Request
const requestPasswordReset = email => apiClient.post('/api/v1/password', {
  user: {
    email,
  },
});

// Reset Password Function
const resetPassword = (password, resetPasswordToken) => apiClient.put('/api/v1/password', {
  user: {
    password,
    reset_password_token: resetPasswordToken,
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

export default apiClient;
export {
  getRecipes,
  createUser,
  getCurrentUser,
  loginUser,
  getUser,
  getUsers,
  resetPassword,
  requestPasswordReset,
  adminEditUser,
};
