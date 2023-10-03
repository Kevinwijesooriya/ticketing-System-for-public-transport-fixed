import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import RouteSchedulePage from "../views";
import AddRouteSchedule from "../views/AddRouteSchedule";
import EditRouteSchedule from "../views/EditRouteSchedule";

const RouteScheduleRoutes = [
  {
    path: "route-schedule",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <RouteSchedulePage /> },
      { path: "add", element: <AddRouteSchedule /> },
      { path: "edit/:id", element: <EditRouteSchedule /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default RouteScheduleRoutes;
