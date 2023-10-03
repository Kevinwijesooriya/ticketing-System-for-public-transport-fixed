import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DriverAPI from "../../../core/services/DrivesAPI.js";
import { toast } from "react-toastify";

const AddDriver = () => {
  const [error, setError] = React.useState({ field: "", message: "" });
  const [postPayload, setPostPayload] = React.useState({
    driverName: "",
    dEmail: "",
    dPhoneNumber: "",
    dPassword: "",
    dAddress: "",
    dNic: "",
    dBusNo: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await DriverAPI.create(postPayload);
    console.log("~ onSubmit ~ response", response);
    if (response.status === 200) {
      toast.success("Driver Added Successfully");
    } else {
      toast.error("Ops! Something went wrong");
    }
  };

  const onChangeInput = (e) => {
    console.log("onChange", postPayload);
    setError({ field: "", message: "" });
    setPostPayload({
      ...postPayload,
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
          ADD A DRIVER
        </Typography>
      </Grid>
      <Box padding="24px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver Name</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="driverName"
              variant="outlined"
              name="driverName"
              error={error.field === "driverName"}
              helperText={!postPayload.driverName && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver Email</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dEmail"
              variant="outlined"
              name="dEmail"
              error={error.field === "dEmail"}
              helperText={!postPayload.dEmail && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Phone Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dPhoneNumber"
              variant="outlined"
              name="dPhoneNumber"
              error={error.field === "dPhoneNumber"}
              helperText={!postPayload.dPhoneNumber && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Password</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              id="dPassword"
              variant="outlined"
              name="dPassword"
              error={error.field === "dPassword"}
              helperText={!postPayload.arrivalTime && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Address</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              id="dAddress"
              name="dAddress"
              error={error.field === "dAddress"}
              helperText={!postPayload.dAddress && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">NIC</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dNic"
              variant="outlined"
              name="dNic"
              error={error.field === "dNic"}
              helperText={!postPayload.dNic && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Bus Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              id="dBusNo"
              variant="outlined"
              name="dBusNo"
              error={error.field === "dBusNo"}
              helperText={!postPayload.dBusNo && error.message}
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
            <Button onClick={(e) => onSubmit(e)}>REgister Driver</Button>
            <Button component={Link} to="/ts/route-driver/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddDriver;
