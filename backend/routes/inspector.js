import { Router } from "express";
const inspectorRoute = Router();
import inspectorController from "../controllers/inspector.js";

inspectorRoute.get("/api/inspector/get/:id",inspectorController.getOneInspector);
inspectorRoute.get("/api/inspector/getAll",inspectorController.getInspectors);
inspectorRoute.post("/api/inspector/create",inspectorController.createInspector);
inspectorRoute.put("/api/inspector/update/:id",inspectorController.updateInspector);
inspectorRoute.delete("/api/inspector/delete/:id",inspectorController.deleteInspector);

export default inspectorRoute;