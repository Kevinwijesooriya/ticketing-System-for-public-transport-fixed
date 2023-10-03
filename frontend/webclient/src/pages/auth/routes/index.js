import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLogin from "../views/AuthLogin";
import AuthRegister from "../views/AuthRegister";
import { Callback } from "../../../core/routes";

function AuthRoutes(props) {
  const { setIsLoggedIn } = props;
  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={<AuthLogin setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          index
          path="/ts"
          element={<AuthLogin setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<AuthLogin setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/auth/callback"
          element={<Callback setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/ts/register" element={<AuthRegister />} />
        <Route
          path="/ts/login"
          element={<AuthLogin setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </>
  );
}

export { AuthRoutes };
