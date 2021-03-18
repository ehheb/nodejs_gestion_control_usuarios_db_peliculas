import express from "express";
import {findAll, findContentActor, addContentActor, updateContentActor, deleteContentActor} from "../../controllers/imdb/contentActors";
import {validatePivotTableUrl, validatePivotTableBody, contentActorIds, contentActorIdsBody} from "../../middlewares/validators"
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

//Rutas de los actores con respecto a los contenidos
router.get("/content/actor",  getRole, isUser, findAll);
router.get("/content/:contentId/actor/:actorId", getRole, isUser, validatePivotTableUrl(contentActorIds), findContentActor);
router.post("/content/actor", getRole, isEditor, validatePivotTableBody(contentActorIds), addContentActor);
router.put("/content/:contentId/actor/:actorId", getRole, isEditor, validatePivotTableUrl(contentActorIds),  validatePivotTableBody(contentActorIdsBody), updateContentActor);
router.delete("/content/actor", getRole, isAdmin, validatePivotTableBody(contentActorIds), deleteContentActor);

export default router;