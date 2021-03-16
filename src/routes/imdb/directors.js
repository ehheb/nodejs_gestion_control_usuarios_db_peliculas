import express from "express";
import {getAllDirectors, getDirectorById, postDirector, updateDirector, deleteDirector} from "../../controllers/imdb/directors";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();
//Rutas de los directores
router.get("/directors", getRole, isUser, getAllDirectors);
router.get("/directors/:id", getRole, isUser, validateFindInUrl(findInUrl), getDirectorById);
router.post("/directors", getRole, isEditor, validateName(createNameSchema), postDirector);
router.put("/directors/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateName(createNameSchema), updateDirector);
router.delete("/directors/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteDirector);

export default router;