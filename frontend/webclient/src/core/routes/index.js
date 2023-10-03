/* eslint-disable no-unused-vars */
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";

import { Navigate } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthRoutes } from "../../pages/auth/routes";
import DefaultLayout from "../../layouts/DefaultLayout";
import Logout from "../../pages/auth/views/Logout";
import DriverRoutes from "../../pages/Drivers/routes";
import HomeRoutes from "../../pages/Home/routes";
import RouteScheduleRoutes from "../../pages/RouteSchedule/routes";
import ReportRoutes from "../../pages/Reports/routes";
import InspectorRoutes from "../../pages/Inspectors/routes";
import AuthContext from "../context/AuthProvider";
import axios from "axios";

// Ensures cookie is sent
axios.defaults.withCredentials = true;

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

function AppRoutes() {
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { loggedIn } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    if (user !== null) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setIsLoggedIn(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading, isError, isSuccess, message]);

  return (
    <>
      {isLoggedIn || loggedIn ? (
        <PrivateRoutes user={user} />
      ) : (
        <AuthRoutes setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
export const Callback = ({ setIsLoggedIn }) => {
  const called = useRef(false);
  const { checkLoginState, loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (loggedIn === false) {
        try {
          if (called.current) return; // prevent rerender caused by StrictMode
          called.current = true;
          const res = await axios.get(
            `${serverUrl}/auth/token${window.location.search}`
          );
          console.log("response: ", res);
          checkLoginState();
          navigate("/");
        } catch (err) {
          console.error(err);
          setIsLoggedIn(true);
          navigate("/");
        }
      } else if (loggedIn === true) {
        navigate("/");
      }
    })();
  }, [checkLoginState, loggedIn, navigate]);
  return <></>;
};

/**
 * manage private routes
 * @returns Router
 */
const PrivateRoutes = (props) => {
  const { user } = props;

  const roles = {
    driver: [...DriverRoutes],
    inspector: [...InspectorRoutes],
    admin: [
      ...DriverRoutes,
      ...InspectorRoutes,
      ...HomeRoutes,
      ...RouteScheduleRoutes,
      ...ReportRoutes,
    ],
  };

  // Determine the routes based on user's role
  const userRoutes = roles[user?.role] || [];
  const routes = [
    {
      path: "/logout",
      element: <Logout />,
      exact: true,
    },
    { path: "", element: <Navigate to="ts/home" /> },
    {
      path: "/ts",
      element: <DefaultLayout />,
      children: userRoutes,
    },
    {
      path: "/auth/callback",
      element: <Callback />,
    },
  ];
  let element = useRoutes(routes);

  return element;
};

export { AppRoutes };
