import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
// Ensures cookie is sent
axios.defaults.withCredentials = true;

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
console.log("🚀 ~ file: Login.jsx:8 ~ serverUrl:", serverUrl);

const Login = () => {
  const handleLogin = async () => {
    console.log(
      "🚀 ~ file: Login.jsx:22 ~ handleLogin ~ serverUrl:",
      serverUrl
    );
    try {
      // Gets authentication url from backend server
      const {
        data: { url },
      } = await axios.get(`${serverUrl}/auth/url`);
      // Navigate to consent screen
      window.location.assign(url);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Button className="btn" onClick={handleLogin}>
        Sign In With Google
      </Button>
    </>
  );
};

export default Login;
