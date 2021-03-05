import express from "express";
import {getAllActors, getActorById, postActor} from "../controllers/imdb/actors";

const router = express.Router();

router.get("/actors", getAllActors);
router.get("/actors/:id", getActorById);
router.post("/actors", postActor);

export default router;