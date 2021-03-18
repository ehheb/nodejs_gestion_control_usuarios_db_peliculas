import express from "express";
import {getAllGenres, getGenreById, postGenre, updateGenre, deleteGenre} from "../../controllers/imdb/genres";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

//Rutas de los generos
router.get("/genres", getRole, isUser, getAllGenres);
router.get("/genres/:id", getRole, isUser, validateFindInUrl(findInUrl), getGenreById);
router.post("/genres", getRole, isEditor, validateName(createNameSchema), postGenre);
router.put("/genres/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateName(createNameSchema), updateGenre);
router.delete("/genres/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteGenre);

export default router;