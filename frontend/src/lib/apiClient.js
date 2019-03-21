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


export default apiClient;
export { getRecipes };
