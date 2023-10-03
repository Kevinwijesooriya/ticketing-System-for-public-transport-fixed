import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import DriverPage from "../views";
import AddDriver from "../views/AddDriver";
import EditDriverDetails from "../views/EditDriverDetails";

const DriverRoutes = [
  {
    path: "route-driver",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <DriverPage /> },
      { path: "add", element: <AddDriver /> },
      { path: "edit/:id", element: <EditDriverDetails /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default DriverRoutes;
