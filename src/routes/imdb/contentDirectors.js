import express from "express";
import {findAll, findContentDirector, addContentDirector, updateContentDirector, deleteContentDirector} from "../../controllers/imdb/contentDirectors"
import {validatePivotTableBody, validatePivotTableUrl, contentDirectorIds, contentDirectorIdsBody} from "../../middlewares/validators"
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

//Rutas de los directores con respecto a los contenidos
router.get("/content/director", getRole, isUser, findAll)
router.get("/content/:contentId/director/:directorId", getRole, isUser, validatePivotTableUrl(contentDirectorIds), findContentDirector);
router.post("/content/director", getRole, isEditor, validatePivotTableBody(contentDirectorIds), addContentDirector);
router.put("/content/:contentId/director/:directorId", getRole, isEditor, validatePivotTableUrl(contentDirectorIds), validatePivotTableBody(contentDirectorIdsBody), updateContentDirector);
router.delete("/content/director", getRole, isAdmin, validatePivotTableBody(contentDirectorIds), deleteContentDirector);
export default router;