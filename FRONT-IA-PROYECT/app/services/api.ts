import axios, { type AxiosInstance } from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function createApiInstance(useToken: boolean = false): AxiosInstance {
  let headers: Record<string, string> = {};

  if (useToken) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = user?.token;

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("Token no encontrado en localStorage.");
    }
  }

  return axios.create({
    baseURL: API_URL,
    headers,
  });
}
