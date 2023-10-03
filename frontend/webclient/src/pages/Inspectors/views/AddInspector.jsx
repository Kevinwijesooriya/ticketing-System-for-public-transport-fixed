import React from 'react';
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InspectorsAPI from "../../../core/services/InspectorsAPI";
import { toast } from "react-toastify";

const AddInspector = () => {
    const [error, setError] = React.useState({ field: "", message: "" });
    const [postPayload, setPostPayload] = React.useState({
        inspectorId: "",
        NicNumber: "",
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        busNumber: "",
    });

    const onSubmit = async (e) => {
      e.preventDefault();
      const response = await InspectorsAPI.create(postPayload);
      console.log("~ onSubmit ~ response", response);
      if (response.status === 200) {
        toast.success("Inspector Added Successfully");
      } else {
        toast.error("Oops! Something went wrong");
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
             ADD A INSPECTOR
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
                 name="inspectorId"
                 error={error.field === "inspectorId"}
                 helperText={!postPayload.inspectorId && error.message}
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
                 name="NicNumber"
                 error={error.field === "NicNumber"}
                 helperText={!postPayload.NicNumber && error.message}
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
                 name="name"
                 error={error.field === "name"}
                 helperText={!postPayload.name && error.message}
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
                 name="email"
                 error={error.field === "email"}
                 helperText={!postPayload.email && error.message}
                 onChange={(e) => onChangeInput(e)}
               />
             </Grid>
             <Grid item xs={6} md={4}>
               <Typography variant="h6">Phone Number</Typography>
             </Grid>
             <Grid item xs={6} md={8}>
               <TextField
                 fullWidth
                 variant="outlined"
                 id="phoneNumber"
                 name="phoneNumber"
                 error={error.field === "phoneNumber"}
                 helperText={!postPayload.phoneNumber && error.message}
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
                 name="address"
                 error={error.field === "address"}
                 helperText={!postPayload.address && error.message}
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
                 name="password"
                 error={error.field === "password"}
                 helperText={!postPayload.password && error.message}
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
             <Grid
               container
               direction="row"
               justifyContent="space-around"
               alignItems="center"
               padding="24px"
             >
               <Button onClick={(e) => onSubmit(e)}>Add Inspector</Button>
               <Button component={Link} to="/ts/inspector/view">
                 Back To Main
               </Button>
             </Grid>
           </Grid>
         </Box>
       </>
     );
};

export default AddInspector;

// line 4, 22 and 174