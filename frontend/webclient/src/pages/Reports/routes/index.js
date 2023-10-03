import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import ReportPage from "../views";

const ReportRoutes = [
  {
    path: "report",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <ReportPage /> },
      //   { path: "add", element: <AddPost /> },
      //   { path: "edit/:id", element: <EditPost /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default ReportRoutes;
