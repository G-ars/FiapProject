import axios from "axios";


const api = axios.create({
  baseURL: "https://inshorts.deta.dev/news?category=technology",
});

export default api;