import express from "express";
import {getAllEpisodeList, getEpisodeById, createEpisode, updateEpisode, deleteEpisode} from "../../controllers/imdb/episodeList";
import {validateFindInUrl, findInUrl, validateEpisode, episodeSchema} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

router.get("/episode-list", getRole, isUser, getAllEpisodeList);
router.get("/episode-list/:id", getRole, isUser, validateFindInUrl(findInUrl), getEpisodeById);
router.post("/episode-list", getRole, isEditor, validateEpisode(episodeSchema), createEpisode);
router.put("/episode-list/:id", getRole, isEditor, validateFindInUrl(findInUrl), updateEpisode);
router.delete("/episode-list/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteEpisode);

export default router;