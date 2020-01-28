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

const endSession = () => apiClient.delete('api/v1/auth/logout', {
  headers: {
    Authorization: localStorage.jwt,
  },
});

const confirmUser = search => apiClient.get(`api/v1/confirmation${search}`);

// CURRENT USER

const getCurrentUser = () => apiClient.get('api/v1/auth', {
  headers: {
    Authorization: localStorage.jwt,
  },
});

const editCurrentUserName = (firstName, lastName) => apiClient.put('api/v1/auth',
  {
    user: {
      first_name: firstName,
      last_name: lastName,
    },
  },
  {
    headers: {
      Authorization: localStorage.jwt,
    },
  });

const putCurrentUserPhoto = photo => apiClient.put('api/v1/auth',
  {
    user: {
      profile_photo: photo,
    },
  },
  {
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

const promoteUser = (userId, isAdmin) => apiClient.patch(`api/v1/users/${userId}`, {
  is_admin: isAdmin,
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

const getUserRecipes = userId => apiClient.get(`api/v1/users/${userId}/recipes`)
  .then(results => results.data);

const createRecipe = recipe => apiClient.post('api/v1/recipes', {
  recipe: {
    title: recipe.title,
    snippet: recipe.description,
    difficulty: recipe.difficulty,
    duration: recipe.duration,
    servings: recipe.servings,
    tags: recipe.tags,
    ingredients: recipe.ingredients,
    directions: recipe.directions,
    photo: recipe.photo,
  },
}, {
  headers: {
    Authorization: localStorage.jwt,
  },
});

const editRecipe = (recipe, id) => apiClient.put(`api/v1/recipes/${id}`, {
  recipe: {
    title: recipe.title,
    snippet: recipe.description,
    difficulty: recipe.difficulty,
    duration: recipe.duration,
    servings: recipe.servings,
    tags: recipe.tags,
    ingredients: recipe.ingredients,
    directions: recipe.directions,
    photo: recipe.photo,
  },
}, {
  headers: {
    Authorization: localStorage.jwt,
  },
});

// COMMENTS

const createComment = (comment, recipeId) => apiClient.post(`api/v1/recipes/${recipeId}/comments`, {
  comment: {
    body: comment,
  },
}, {
  headers: {
    Authorization: localStorage.jwt,
  },
});

const deleteComment = (recipeId, commentId) => apiClient.delete(`api/v1/recipes/${recipeId}/comments/${commentId}`, {
  headers: {
    Authorization: localStorage.jwt,
  },
});

// TAGS

const getTags = () => apiClient.get('/api/v1/tags')
  .then(results => results.data);

const createTag = title => apiClient.post('/api/v1/tags', {
  tag: { title },
}, {
  headers: {
    Authorization: localStorage.jwt,
  },
});

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
  editCurrentUserName,
  putCurrentUserPhoto,
  getUsers,
  getUser,
  getRecipes,
  getUserRecipes,
  getRecipe,
  createRecipe,
  editRecipe,
  getTags,
  createTag,
  adminEditUser,
  resetPassword,
  resetCurrentUserPassword,
  requestPasswordReset,
  suspendUser,
  promoteUser,
  endSession,
  confirmUser,
  createComment,
  deleteComment,
};
