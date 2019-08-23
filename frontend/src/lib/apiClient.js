/* global localStorage */
/* eslint no-undef: "error" */

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

// AUTHENTICATION

const createUser = data => apiClient.post('api/v1/auth', {
  user: {
    first_name: data.firstname,
    last_name: data.lastname,
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

// CURRENT USER

const getCurrentUser = () => apiClient.get('api/v1/auth', {
  headers: {
    Authorization: localStorage.jwt,
  },
});

// USERS

const getUsers = () => apiClient.get('api/v1/users')
  .then(results => results.data);

const getUser = userId => apiClient.get(`api/v1/users/${userId}`, {
  headers: {
    Authorization: localStorage.jwt,
  },
});

const suspendUser = (userId, isSuspended) => apiClient.patch(`api/v1/users/${userId}`, {
  is_suspended: isSuspended,
});

const adminEditUser = (data, userId) => apiClient.patch(`api/v1/users/${userId}`, {
  first_name: data.firstName.value,
  last_name: data.lastName.value,
  email: data.email.value,
});

// RECIPES

const getRecipes = (search) => {
  const query = search ? `?search=${search}` : '';
  return apiClient.get(`api/v1/recipes${query}`)
    .then(results => results.data);
};

const getRecipe = id => apiClient.get(`api/v1/recipes/${id}`);

// PASSWORD REQUEST

const resetPassword = (resetPasswordToken, password) => apiClient.put('/api/v1/password', {
  user: {
    password,
    reset_password_token: resetPasswordToken,
  },
});

const resetCurrentUserPassword = (currentPassword, newPassword) => apiClient.put('api/v1/auth',
  {
    user: {
      current_password: currentPassword,
      password: newPassword,
    },
  },
  {
    headers: {
      Authorization: localStorage.jwt,
    },
  });

const requestPasswordReset = email => apiClient.post('/api/v1/password', {
  user: {
    email,
  },
});

export default apiClient;
export {
  createUser,
  loginUser,
  getCurrentUser,
  getUsers,
  getUser,
  getRecipes,
  getRecipe,
  adminEditUser,
  resetPassword,
  resetCurrentUserPassword,
  requestPasswordReset,
  suspendUser,
};
