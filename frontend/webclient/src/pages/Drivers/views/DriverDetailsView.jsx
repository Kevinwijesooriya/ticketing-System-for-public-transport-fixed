import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DriveAPI from "../../../core/services/DrivesAPI.js";
import { StyledTableCell } from "../../../core/styles";

export default function DriverDetailsView() {
  const [callback, setCallback] = React.useState(false);
  const [driveSchedules, setDriveSchedules] = React.useState([]);

  async function fetchData() {
    const response = await DriveAPI.getAll();
    if (response.status === 200) {
      setDriveSchedules(response.data.data);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [callback]);

  const handleDelete = async (deleteId) => {
    try {
      const response = await DriveAPI.delete(deleteId);
      console.log("🚀 ~ response", response);
      setCallback(!callback);
      toast.success("Driver Details Delete Success");
    } catch (error) {
      setCallback(!callback);
      toast.success("Driver Details Delete Unsuccess");
    }
  };

  //search---------------------------------------------------------
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredRows = driveSchedules.filter((row) => {
    return (
      row.driverName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.dEmail.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.dBusNo.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });
  //----------------------------------------------------------------
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="12px"
      >
        <Button component={Link} to="/ts/route-driver/add">
          Add New Schedule
        </Button>
        <TextField
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>driver Name</StyledTableCell>
              <StyledTableCell align="right">Driver-Email</StyledTableCell>
              <StyledTableCell align="right">
                Driver Phone Number
              </StyledTableCell>
              <StyledTableCell align="right">Driver Address</StyledTableCell>
              <StyledTableCell align="right">Driver NIC</StyledTableCell>
              <StyledTableCell align="right">Bus Number</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="right">
                  {row.driverName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.dEmail}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.dPhoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">{row.dAddress}</StyledTableCell>
                <StyledTableCell align="right">{row.dNic}</StyledTableCell>
                <StyledTableCell align="right">{row.dBusNo}</StyledTableCell>
                <StyledTableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      component={Link}
                      to={`/ts/route-driver/edit/${row._id}`}
                      size="small"
                      edge="start"
                      color="inherit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      edge="start"
                      color="inherit"
                      onClick={() => handleDelete(row._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
