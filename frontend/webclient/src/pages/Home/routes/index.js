import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import HomePage from "../views";

const HomeRoutes = [
  {
    path: "home",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <HomePage /> },
      //   { path: "add", element: <AddPost /> },
      //   { path: "edit/:id", element: <EditPost /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default HomeRoutes;
