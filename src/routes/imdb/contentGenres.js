import express from "express";
import {findAll, findContentGenre, addContentGenre, updateContentGenre, deleteContentGenre} from "../../controllers/imdb/contentGenres";
import {validatePivotTableUrl, validatePivotTableBody, contentGenreIds, contentGenreIdsBody} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

//Rutas de los géneros con respecto a los contenidos
router.get("/content/genre", getRole, isUser, findAll);
router.get("/content/:contentId/genre/:genreId", getRole, isUser, validatePivotTableUrl(contentGenreIds), findContentGenre);
router.post("/content/genre", getRole, isEditor, validatePivotTableBody(contentGenreIds), addContentGenre);
router.put("/content/:contentId/genre/:genreId", getRole, isEditor, validatePivotTableUrl(contentGenreIds), validatePivotTableBody(contentGenreIdsBody), updateContentGenre);
router.delete("/content/genre", getRole, isAdmin, validatePivotTableBody(contentGenreIds), deleteContentGenre);

export default router;