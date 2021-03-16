import express from "express";
import {findAll, findContentGenre, addContentGenre, updateContentGenre, deleteContentGenre} from "../../controllers/imdb/contentGenres";

const router = express.Router();

router.get("/content/genre", findAll);
router.get("/content/:contentId/genre/:genreId", findContentGenre);
router.post("/content/genre", addContentGenre);
router.put("/content/:contentId/genre/:genreId", updateContentGenre);
router.delete("/content/genre", deleteContentGenre);

export default router;