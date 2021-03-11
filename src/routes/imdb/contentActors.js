import express from "express";
import {findAll, findContentActor, addContentActor, updateContentActor, deleteContentActor} from "../../controllers/imdb/contentActors";
import {validatePivotTableUrl, validatePivotTableBody, contentActorIds} from "../../middlewares/validators"


const router = express.Router();

router.get("/content/actor", findAll);
router.get("/content/:contentId/actor/:actorId", validatePivotTableUrl(contentActorIds), findContentActor);
router.post("/content/actor", validatePivotTableBody(contentActorIds), addContentActor);
router.put("/content/:contentId/actor/:actorId", validatePivotTableUrl(contentActorIds),  validatePivotTableBody(contentActorIds), updateContentActor);
router.delete("/content/actor", validatePivotTableBody(contentActorIds), deleteContentActor);

export default router;