import express from "express";
import {getAllDirectors, getDirectorById, postDirector, updateDirector, deleteDirector} from "../../controllers/imdb/directors";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();
//Rutas de los directores
router.get("/directors", getAllDirectors);
router.get("/directors/:id", validateFindInUrl(findInUrl), getDirectorById);
router.post("/directors", validateName(createNameSchema), postDirector);
router.put("/directors/:id", validateFindInUrl(findInUrl), validateName(createNameSchema), updateDirector);
router.delete("/directors/:id", validateFindInUrl(findInUrl), deleteDirector);

export default router;