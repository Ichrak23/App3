import axios from "axios";
const httpClient = axios.create({
  /*  withCredentials: true,   */
  baseURL: "https://elise6-pfe.elisedemo.com/GED/elise",
  headers: {},
});
/* window.axios.defaults.withCredentials=true; */
httpClient.interceptors.request.use(request => {
  document.cookie="S_ARCHIMED_CRYSTAL_AUTH=GED=0264230ba84146449a774b7c8f042406"
  
  return request
})

httpClient.interceptors.response.use(response => {

  return response
})
export default httpClient;
