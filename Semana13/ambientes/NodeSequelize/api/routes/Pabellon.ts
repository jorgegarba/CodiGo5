// pabellon router
import { Router } from "express";
import * as pabellon_controller from "./../controllers/Pabellon";
import { wachiman } from "../utils/Guards";

export let pabellon_router = Router();

pabellon_router.post("/pabellon", pabellon_controller.createPabellon);
pabellon_router.get("/pabellon", wachiman, pabellon_controller.getPabellones);
pabellon_router.put("/pabellon", pabellon_controller.updatePabellon);
pabellon_router.get(
  "/pabellones/aulas",
  pabellon_controller.getAulasXPabellones
);
pabellon_router.get(
  "/pabellon/:pab_id/aulas",
  pabellon_controller.getAulasByPabellonId
);
pabellon_router.get("/pabellon/:pab_id", pabellon_controller.getPabellonById);
