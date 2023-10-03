import { Router } from "express";
const driverRoute = Router();
import driverController from "../controllers/driverController.js";

driverRoute.get("/api/driver/get/:id", driverController.getOneDriver);
driverRoute.get("/api/driver/getAll", driverController.getDrivers);
driverRoute.post("/api/driver/register", driverController.createDriver);
driverRoute.put("/api/driver/update/:id", driverController.updateDriver);
driverRoute.delete("/api/driver/delete/:id", driverController.deleteUser);

export default driverRoute;
