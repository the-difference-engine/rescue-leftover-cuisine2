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


export default apiClient;
export { getRecipes };