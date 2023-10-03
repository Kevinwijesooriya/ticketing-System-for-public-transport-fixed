import React from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../../../common/components/Wrapper";
import InspectorsPage from "../views";
import AddInspector from "../views/AddInspector";
import EditInspector from "../views/EditInspector";

const InspectorRoutes = [
  {
    path: "inspector",
    element: <Wrapper />,
    children: [
      { path: "", element: <Navigate to="view" /> },
      { path: "view", element: <InspectorsPage /> },
      { path: "add", element: <AddInspector /> },
      { path: "edit/:id", element: <EditInspector /> },
      //   { path: "view/:id", element: <ViewOne /> },
    ],
  },
];

export default InspectorRoutes;
