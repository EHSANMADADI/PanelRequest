import axios from "axios";

const api = axios.create({
  baseURL: "https://195.191.45.56:16007",
  headers: {
    Accept: "application/json",
  },
});
export default api;