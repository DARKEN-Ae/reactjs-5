import axios from "axios";

const API_KEY = "5f8e935426ac4a47a0c3c1ab33cb4c81";

const request = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: API_KEY,
  },
});

export default request;
