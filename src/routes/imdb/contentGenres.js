import express from "express";
import {findAll, findContentGenre, addContentGenre, updateContentGenre, deleteContentGenre} from "../../controllers/imdb/contentGenres";
import {validatePivotTableUrl, validatePivotTableBody, contentGenreIds, contentGenreIdsBody} from "../../middlewares/validators";
const router = express.Router();

router.get("/content/genre", findAll);
router.get("/content/:contentId/genre/:genreId", validatePivotTableUrl(contentGenreIds), findContentGenre);
router.post("/content/genre", validatePivotTableBody(contentGenreIds), addContentGenre);
router.put("/content/:contentId/genre/:genreId", validatePivotTableUrl(contentGenreIds), validatePivotTableBody(contentGenreIdsBody), updateContentGenre);
router.delete("/content/genre", validatePivotTableBody(contentGenreIds), deleteContentGenre);

export default router;