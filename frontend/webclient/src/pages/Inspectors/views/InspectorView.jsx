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
import InspectorsAPI from "../../../core/services/InspectorsAPI";
import { StyledTableCell } from "../../../core/styles";

export default function InspectorView() {
  const [callback, setCallback] = React.useState(false);
  const [inspectors, setInspectors] = React.useState([]);

  async function fetchData() {
    const response = await InspectorsAPI.getAll();
    if (response.status === 200) {
      setInspectors(response.data.data);
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
      const response = await InspectorsAPI.delete(deleteId);
      console.log("🚀 ~ response", response);
      setCallback(!callback);
      toast.success("Inspector Delete Success");
    } catch (error) {
      setCallback(!callback);
      toast.success("Inspector Delete Unsuccess");
    }
  };

  //search---------------------------------------------------------
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredRows = inspectors.filter((row) => {
    return (
      row.NicNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      row.busNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
        <Button component={Link} to="/ts/inspector/add">
          Add Inspector
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
              <StyledTableCell>Inspector ID</StyledTableCell>
              <StyledTableCell align="right">NIC Number</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Password</StyledTableCell>
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
                  {row.inspectorId}
                </StyledTableCell>
                <StyledTableCell align="right">{row.NicNumber}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell align="right">{row.password}</StyledTableCell>
                <StyledTableCell align="right">{row.busNumber}</StyledTableCell>
                <StyledTableCell align="right">
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      component={Link}
                      to={`/ts/inspector/edit/${row._id}`}
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

// 19, 27, 42, 72, 118