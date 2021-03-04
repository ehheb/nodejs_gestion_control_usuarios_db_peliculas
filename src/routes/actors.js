import express from "express";
import {getAllActors, getActorById} from "../controllers/imdb/actors";

const router = express.Router();

router.get("/actors", getAllActors);
router.get("/actors/:id", getActorById);

export default router;