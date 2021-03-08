import express from "express";
import {getAllGenres, getGenreById, postGenre, updateGenre, deleteGenre} from "../../controllers/imdb/genres";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();
//Rutas de los generos
router.get("/genres", getAllGenres);
router.get("/genres/:id", validateFindInUrl(findInUrl), getGenreById);
router.post("/genres", validateName(createNameSchema), postGenre);
router.put("/genres/:id", validateFindInUrl(findInUrl), validateName(createNameSchema), updateGenre);
router.delete("/genres/:id", validateFindInUrl(findInUrl), deleteGenre);

export default router;