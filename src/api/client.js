import axios from "axios";

const client = axios.create({
  baseURL: "https://codingcare.site",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://codingcare.site",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "include",
    withCredentials: true,
  },
});

export default client;
