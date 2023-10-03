import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TSTheme } from "./core/styles/TSTheme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./core/context/AuthProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={TSTheme}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <React.StrictMode>
        <Provider store={store}>
          <AuthProvider>
            <BrowserRouter>
              <App />
              <ToastContainer />
            </BrowserRouter>
          </AuthProvider>
        </Provider>
      </React.StrictMode>
    </LocalizationProvider>
  </ThemeProvider>
);
