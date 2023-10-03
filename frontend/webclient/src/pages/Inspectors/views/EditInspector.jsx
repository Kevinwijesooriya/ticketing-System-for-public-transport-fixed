import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InspectorsAPI from "../../../core/services/InspectorsAPI";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditInspector = () => {
  const params = useParams();
  const id = params.id;
  const [error, setError] = React.useState({ field: "", message: "" });
  const [payload, setPayload] = React.useState({
    inspectorId: "",
    NicNumber: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    busNumber: "",
  });

  async function fetchData() {
    const response = await InspectorsAPI.getOne(id);
    console.log(
      "🚀 ~ file: EditInspector.jsx ~ line 20 ~ fetchData ~ response",
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
    const response = await InspectorsAPI.update({ id, payload });
    console.log("~ onSubmit ~ response", response);
    if (response.status === 200) {
      toast.success("Inspector Update Success");
    } else {
      toast.error("Oops! Something went wrong");
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
          INSPECTOR UPDATE
        </Typography>
      </Grid>
      <Box padding="24px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Inspector ID</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="inspectorId"
              variant="outlined"
              value={payload.inspectorId}
              name="inspectorId"
              error={error.field === "inspectorId"}
              helperText={!payload.inspectorId && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">NIC Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="NicNumber"
              variant="outlined"
              value={payload.NicNumber}
              name="NicNumber"
              error={error.field === "NicNumber"}
              helperText={!payload.NicNumber && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Name</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="name"
              variant="outlined"
              value={payload.name}
              name="name"
              error={error.field === "name"}
              helperText={!payload.name && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Email</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="email"
              variant="outlined"
              value={payload.email}
              name="email"
              error={error.field === "email"}
              helperText={!payload.email && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Phone Number</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="phoneNumber"
              variant="outlined"
              value={payload.phoneNumber}
              name="phoneNumber"
              error={error.field === "phoneNumber"}
              helperText={!payload.phoneNumber && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Address</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="address"
              variant="outlined"
              value={payload.address}
              name="address"
              error={error.field === "address"}
              helperText={!payload.address && error.message}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6">Password</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              fullWidth
              id="password"
              variant="outlined"
              value={payload.password}
              name="password"
              error={error.field === "password"}
              helperText={!payload.password && error.message}
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
              value={payload.busNumber}
              name="busNumber"
              error={error.field === "busNumber"}
              helperText={!payload.busNumber && error.message}
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
            <Button component={Link} to="/ts/inspector/view">
              Back To Main
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EditInspector;
