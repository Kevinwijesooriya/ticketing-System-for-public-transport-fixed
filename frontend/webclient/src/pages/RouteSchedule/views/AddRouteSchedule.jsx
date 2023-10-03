import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RouteScheduleAPI from "../../../core/services/RouteScheduleAPI";
import { toast } from "react-toastify";

const AddRouteSchedule = () => {
  const [error, setError] = React.useState({ field: "", message: "" });
  const [postPayload, setPostPayload] = React.useState({
    routerId: "",
    startDestination: "",
    endDestination: "",
    arrivalTime: "",
    departureTime: "",
    busNumber: [],
    availableDates: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await RouteScheduleAPI.create(postPayload);
    console.log("~ onSubmit ~ response", response);
    if (response.status === 200) {
      toast.success("Route Schedule Added Successfully");
    } else {
      toast.error("Ops! Something went wrong");
    }
  };

  const onChangeInput = (e) => {
    console.log("onChange", postPayload);
    setError({ field: "", message: "" });
    if (e.target.name === "busNumber") {
      let arr = [];
      arr.push({ number: e.target.value });
      setPostPayload({
        ...postPayload,
        [e.target.name]: arr,
      });
    } else {
      setPostPayload({
        ...postPayload,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <Grid padding="12px">
        <Typography
          textAlign="center"
          variant="h5"
          fontWeight="700"
          sx={{ color: (theme) => theme.palette.tsColors.ts_mid_green }}
        >
          ADD A NEW SCHEDULE
        </Typography>
      </Grid>
      <Box padding="24px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Router ID</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="routerId"
              variant="outlined"
              name="routerId"
              error={error.field === "routerId"}
              helperText={!postPayload.routerId && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Start Destination</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="startDestination"
              variant="outlined"
              name="startDestination"
              error={error.field === "startDestination"}
              helperText={!postPayload.startDestination && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">End Destination</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="endDestination"
              variant="outlined"
              name="endDestination"
              error={error.field === "endDestination"}
              helperText={!postPayload.endDestination && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Arrival Time</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="arrivalTime"
              variant="outlined"
              name="arrivalTime"
              error={error.field === "arrivalTime"}
              helperText={!postPayload.arrivalTime && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Departure Time</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              id="departureTime"
              name="departureTime"
              error={error.field === "departureTime"}
              helperText={!postPayload.departureTime && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Bus Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="busNumber"
              variant="outlined"
              name="busNumber"
              error={error.field === "busNumber"}
              helperText={!postPayload.busNumber && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Available Dates</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="availableDates"
              variant="outlined"
              name="availableDates"
              error={error.field === "availableDates"}
              helperText={!postPayload.description && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            padding="24px"
          >
            <Button onClick={(e) => onSubmit(e)}>Add Schedule</Button>
            <Button component={Link} to="/ts/route-schedule/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddRouteSchedule;
