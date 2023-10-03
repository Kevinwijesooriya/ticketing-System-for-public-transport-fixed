import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Tabs
        // value={value}
        // onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ background: "black", color: "white" }}
      >
        <Tab label="Home" component={Link} to="home" sx={{ color: "white" }} />
        <Tab
          label="Route Schedule"
          component={Link}
          to="route-schedule"
          sx={{ color: "white" }}
        />
        <Tab
          label="Drivers"
          component={Link}
          to="route-driver"
          sx={{ color: "white" }}
        />
        <Tab
          label="Inspector"
          component={Link}
          to="inspector"
          sx={{ color: "white" }}
        />
        <Tab
          label="Reports"
          component={Link}
          to="report"
          sx={{ color: "white" }}
        />
      </Tabs>
    </>
  );
};

export default Navbar;
