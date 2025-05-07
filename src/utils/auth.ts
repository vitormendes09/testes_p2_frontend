import axios from "axios";

const API_URL = "http://localhost:3000"; 

export async function loginRequest(email: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  const { access_token } = response.data;
  localStorage.setItem("token", access_token);
  return access_token;
}

export function logout() {
  localStorage.removeItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}
