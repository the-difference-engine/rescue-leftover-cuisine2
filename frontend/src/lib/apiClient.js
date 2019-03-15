import axios from "axios";

let baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000"

let apiClient = axios.create({
    baseURL: baseURL
});

// TODO: add methods to wrap API endpoints

let getRecipes = search => {
  let query = search ? "?search=" + search : "";
  return apiClient.get("api/v1/recipe" + query)
    .then(results => { return results.data })
    .catch(e => { return [] });
}; 

let createUser = (data) => {
  return apiClient.post("api/v1/user", {
    user: {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password
    }
  })
};

let loginUser = (data) => {
  debugger
  return apiClient.post("api/v1/auth/login", {
    user: {
      email: data.email,
      password: data.password
    }
  }).then(response => { console.log(response) })
}

export default apiClient;
export { getRecipes, createUser, loginUser };