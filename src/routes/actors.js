import express from "express";
import {getAllActors, getActorById, postActor, updateActor} from "../controllers/imdb/actors";

const router = express.Router();

router.get("/actors", getAllActors);
router.get("/actors/:id", getActorById);
router.post("/actors", postActor);
router.put("/actors/:id", updateActor);

export default router;