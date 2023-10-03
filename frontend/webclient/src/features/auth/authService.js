import axios from "axios";
import { axiosClient } from "../../core/plugins/interceptors/AxiosClient";

const API_URL = "/api/user/";

// Register user
const register = async (userData) => {
  const response = await axiosClient().post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axiosClient().post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
const loginGoogle = async (userData) => {
  userData.role = "admin";

  if (userData) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  return userData;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  loginGoogle,
};

export default authService;
