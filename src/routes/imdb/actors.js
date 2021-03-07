import express from "express";
import {getAllActors, getActorById, postActor, updateActor, deleteActor} from "../../controllers/imdb/actors";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();
//Rutas de los actores 
router.get("/actors",getAllActors);
router.get("/actors/:id", validateFindInUrl(findInUrl), getActorById);
router.post("/actors", validateName(createNameSchema), postActor);
router.put("/actors/:id", validateFindInUrl(findInUrl), validateName(createNameSchema), updateActor);
router.delete("/actors/:id", validateFindInUrl(findInUrl), deleteActor);

export default router;