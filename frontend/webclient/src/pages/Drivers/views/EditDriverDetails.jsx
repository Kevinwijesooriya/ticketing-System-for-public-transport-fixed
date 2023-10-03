import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DriverAPI from "../../../core/services/DrivesAPI.js";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditDriverDetails = () => {
  const params = useParams();
  const id = params.id;
  const [error, setError] = React.useState({ field: "", message: "" });
  const [payload, setPayload] = React.useState({
    driverName: "",
    dEmail: "",
    dPhoneNumber: "",
    dPassword: "",
    dAddress: "",
    dNic: "",
    dBusNo: "",
  });

  async function fetchData() {
    const response = await DriverAPI.getOne(id);
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
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await DriverAPI.update({ id, payload });
    console.log("~ onSubmit ~ response", response);
    if (response.status === 200) {
      toast.success("Driver Details Update Success");
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
          DRIVER DETAILS UPDATE
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
              value={payload.driverName}
              name="driverName"
              error={error.field === "driverName"}
              helperText={!payload.driverName && error.message}
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
              value={payload.dEmail}
              name="startDestination"
              error={error.field === "dEmail"}
              helperText={!payload.dEmail && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver Phone Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dPhoneNumber"
              variant="outlined"
              value={payload.dPhoneNumber}
              name="dPhoneNumber"
              error={error.field === "dPhoneNumber"}
              helperText={!payload.dPhoneNumber && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver Address</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dAddress"
              variant="outlined"
              value={payload.dAddress}
              name="dAddress"
              error={error.field === "dAddress"}
              helperText={!payload.dAddress && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Driver NIC</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dNic"
              variant="outlined"
              value={payload.dNic}
              name="dNic"
              error={error.field === "dNic"}
              helperText={!payload.dNic && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Bus Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="dBusNo"
              variant="outlined"
              value={payload.dBusNo}
              name="dBusNo"
              error={error.field === "dBusNo"}
              helperText={!payload.dBusNo && error.message}
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
            <Button component={Link} to="/ts/route-driver/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditDriverDetails;
