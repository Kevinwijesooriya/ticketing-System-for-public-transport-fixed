import { Button } from "@mui/material";
import React from "react";
import RouteScheduleAPI from "../../../core/services/RouteScheduleAPI";
import DrivesAPI from "../../../core/services/DrivesAPI";
import RouteScheduleReportGenerator from "./RouteSheduleReport";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea, CardActions } from '@mui/material';
import DriversReportGenerator from "./Drivers";
import InspectorsAPI from "../../../core/services/InspectorsAPI";
import InspectorReportGenerator from "./Inspector";

const ReportPage = () => {
  const [routeSchedules, setRouteSchedules] = React.useState([]);
  async function fetchRouteScheduleData() {
    const response = await RouteScheduleAPI.getAll();
    if (response.status === 200) {
      setRouteSchedules(response.data.data);
    }
  }

  const [drivers, setDrivers] = React.useState([]);
  async function fetchDriversData() {
    const response = await DrivesAPI.getAll();
    if (response.status === 200) {
      setDrivers(response.data.data);
    }
  }

  const [inspectors, setInspectors] = React.useState([]);
  async function fetchInspectorsData() {
    const response = await InspectorsAPI.getAll();
    if (response.status === 200) {
      setInspectors(response.data.data);
    }
  }


  React.useEffect(() => {
    fetchRouteScheduleData()
    fetchDriversData()
    fetchInspectorsData()
  }, [])

  return <>
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      columns={13}
    ><Grid item xs={3}>
        <Card sx={{ maxWidth: 300 }} >
          <CardActionArea sx={{ height: "400px" }}>
            <CardMedia
              component="img"
              height="140"
              image="core/images/image"
              alt="Route Schedule"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Route Schedule Report
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can get report for route Schedule Report
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button size="small" color="primary" onClick={() => RouteScheduleReportGenerator(routeSchedules)}>Download</Button></Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea sx={{ height: "400px" }}>
            <CardMedia
              component="img"
              height="140"
              image="core/images/image"
              alt="Route Schedule"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Drivers Report
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can get report for Drivers Report
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button size="small" color="primary" onClick={() => DriversReportGenerator(drivers)}>Download</Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 300 }} >
          <CardActionArea sx={{ height: "400px" }}>
            <CardMedia
              component="img"
              height="140"
              image="core/images/image"
              alt="Route Schedule"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Inspectors Report
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You can get report for Inspector Report
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button size="small" color="primary" onClick={() => InspectorReportGenerator(inspectors)}>Download</Button></Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </>;
};

export default ReportPage;
