import express from "express";
import {findAll, findContentDirector, addContentDirector, updateContentDirector, deleteContentDirector} from "../../controllers/imdb/contentDirectors"
import {validatePivotTableBody, validatePivotTableUrl, contentDirectorIds, contentDirectorIdsBody} from "../../middlewares/validators"

const router = express.Router();

router.get("/content/director", findAll)
router.get("/content/:contentId/director/:directorId", validatePivotTableUrl(contentDirectorIds), findContentDirector);
router.post("/content/director", validatePivotTableBody(contentDirectorIds), addContentDirector);
router.put("/content/:contentId/director/:directorId", validatePivotTableUrl(contentDirectorIds), validatePivotTableBody(contentDirectorIdsBody), updateContentDirector);
router.delete("/content/director", validatePivotTableBody(contentDirectorIds), deleteContentDirector);
export default router;