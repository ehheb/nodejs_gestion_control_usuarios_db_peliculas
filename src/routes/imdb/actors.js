import express from "express";
import {getAllActors, getActorById, postActor, updateActor, deleteActor} from "../../controllers/imdb/actors";
import {validateActors, createActorSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();

router.get("/actors",getAllActors);
router.get("/actors/:id", validateFindInUrl(findInUrl), getActorById);
router.post("/actors", validateActors(createActorSchema), postActor);
router.put("/actors/:id", validateFindInUrl(findInUrl), validateActors(createActorSchema), updateActor);
router.delete("/actors/:id", validateFindInUrl(findInUrl), deleteActor);

export default router;