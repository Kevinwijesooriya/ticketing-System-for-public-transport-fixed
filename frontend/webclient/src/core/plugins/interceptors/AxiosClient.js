import axios from "axios";

const config = {
  baseURL: " http://localhost:5000/",
  timeout: 50000,
  // headers: { "Content-Type": "application/json" },
  // withCredentials: true,
};

const axiosClient = () => {
  return axios.create({
    ...config,
  });
};
export { axiosClient };
