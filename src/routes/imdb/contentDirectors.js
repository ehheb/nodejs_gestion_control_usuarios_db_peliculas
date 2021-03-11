import express from "express";
import {findAll, findContentDirector, addContentDirector} from "../../controllers/imdb/contentDirectors"
const router = express.Router();

router.get("/content/director", findAll)
router.get("/content/:contentId/director/:directorId", findContentDirector);
router.post("/content/director", addContentDirector);
export default router;