import express from "express";
import {getAllActors, getActorById, postActor, updateActor, deleteActor} from "../../controllers/imdb/actors";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";


const router = express.Router();
//Rutas de los actores 
router.get("/actors", getRole, isUser, getAllActors);
router.get("/actors/:id", getRole, isUser, validateFindInUrl(findInUrl), getActorById);
router.post("/actors", getRole, isEditor, validateName(createNameSchema), postActor);
router.put("/actors/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateName(createNameSchema), updateActor);
router.delete("/actors/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteActor);

export default router;