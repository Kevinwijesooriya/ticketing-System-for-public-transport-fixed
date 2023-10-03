import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RouteScheduleAPI from "../../../core/services/RouteScheduleAPI";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditRouteSchedule = () => {
  const params = useParams();
  const id = params.id;
  const [error, setError] = React.useState({ field: "", message: "" });
  const [payload, setPayload] = React.useState({
    routerId: "",
    startDestination: "",
    endDestination: "",
    arrivalTime: "",
    departureTime: "",
    availableDates: "",
  });

  async function fetchData() {
    const response = await RouteScheduleAPI.getOne(id);
    console.log(
      "🚀 ~ file: EditRouteSchedule.jsx ~ line 20 ~ fetchData ~ response",
      response
    );
    if (response.status === 200) {
      setPayload(response.data.data);
    }
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await RouteScheduleAPI.update({ id, payload });
    console.log("~ onSubmit ~ response", response);
    if (response.status === 200) {
      toast.success("Route Schedule Update Success");
    } else {
      toast.error("Ops! Something went wrong");
    }
  };

  const onChangeInput = (e) => {
    console.log("onChange", payload);
    setError({ field: "", message: "" });
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
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
          SCHEDULE UPDATE
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
              value={payload.routerId}
              name="routerId"
              error={error.field === "routerId"}
              helperText={!payload.routerId && error.message}
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
              value={payload.startDestination}
              name="startDestination"
              error={error.field === "startDestination"}
              helperText={!payload.startDestination && error.message}
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
              value={payload.endDestination}
              name="endDestination"
              error={error.field === "endDestination"}
              helperText={!payload.endDestination && error.message}
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
              value={payload.arrivalTime}
              name="arrivalTime"
              error={error.field === "arrivalTime"}
              helperText={!payload.arrivalTime && error.message}
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
              value={payload.departureTime}
              id="departureTime"
              name="departureTime"
              error={error.field === "departureTime"}
              helperText={!payload.departureTime && error.message}
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
              value={payload.availableDates}
              name="availableDates"
              error={error.field === "availableDates"}
              helperText={!payload.description && error.message}
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
            <Button onClick={(e) => onSubmit(e)}>Save Changes</Button>
            <Button component={Link} to="/ts/route-schedule/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditRouteSchedule;
