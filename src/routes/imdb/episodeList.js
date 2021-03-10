import express from "express";
import {getAllEpisodeList, getEpisodeById, createEpisode, updateEpisode, deleteEpisode} from "../../controllers/imdb/episodeList";
import {validateFindInUrl, findInUrl, validateEpisode, episodeSchema} from "../../middlewares/validators";


const router = express.Router();

router.get("/episode-list", getAllEpisodeList);
router.get("/episode-list/:id", validateFindInUrl(findInUrl), getEpisodeById);
router.post("/episode-list", validateEpisode(episodeSchema), createEpisode);
router.put("/episode-list/:id", validateFindInUrl(findInUrl), updateEpisode);
router.delete("/episode-list/:id", validateFindInUrl(findInUrl), deleteEpisode);

export default router;