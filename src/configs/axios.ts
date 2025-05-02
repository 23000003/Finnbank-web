import axios from "axios";
import { showToast } from "../utils/toast";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    // gets token from local storage, if yes add in headers
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // redirect to the login page if the server returns a 401
    if (error.response && error.response.status === 401) {
      showToast.error("Session Expired");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
