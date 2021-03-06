//import express from "express";
import {getAllDirectors, getDirectorById, postDirector, updateDirector, deleteDirector} from "../../controllers/imdb/directors";
//import {validateActors, createActorSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();

router.get("/directors", getAllDirectors);
router.get("/directors/:id", getDirectorById);
router.post("/directors", postDirector);
router.put("/directors/:id", updateDirector);
router.delete("/directors/:id", deleteDirector);

export default router;