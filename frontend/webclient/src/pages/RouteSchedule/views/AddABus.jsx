import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import RouteScheduleAPI from "../../../core/services/RouteScheduleAPI";

export default function AddABus(props) {
  const { id, callback, setCallback } = props;
  const [open, setOpen] = React.useState(false);
  const [busNumber, setBusNumber] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = async () => {
    let payload = { busNumber };
    const response = await RouteScheduleAPI.addABus({ id, payload });
    console.log("handleAdd ~ response", response);
    setCallback(!callback);
    setOpen(false);
  };
  const onchange = (e) => {
    setBusNumber(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" size="small" onClick={handleClickOpen}>
        Overcrowded Add a Bus
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Bus</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seems the route is overcrowded. Add a bus.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bus Number"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => onchange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
