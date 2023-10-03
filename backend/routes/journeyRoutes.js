import { Router } from "express";
const journeyRoute = Router();
import journeyController from "../controllers/journeyController.js";

journeyRoute.get("/api/journey/get/:id", journeyController.getOneJourney);
journeyRoute.get("/api/journey/getAll", journeyController.getJourneys);
journeyRoute.post("/api/journey/create", journeyController.createJourney);
journeyRoute.put("/api/journey/update/:id", journeyController.updateJourney);
journeyRoute.delete("/api/journey/delete/:id", journeyController.deleteJourney);

export default journeyRoute;
