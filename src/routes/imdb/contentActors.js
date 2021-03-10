import express from "express";
import {findAll, findContentActor} from "../../controllers/imdb/contentActors";



const router = express.Router();

router.get("/content/actor", findAll);
router.get("/content/:contentId/actor/:actorId", findContentActor);

export default router;