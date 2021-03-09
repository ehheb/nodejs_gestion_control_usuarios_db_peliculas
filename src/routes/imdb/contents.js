import express from "express";
import {getAllContents, getContentById, putContent} from "../../controllers/imdb/contents";
import {validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();


router.get("/contents", getAllContents);
router.get("/contents/:id", validateFindInUrl(findInUrl), getContentById);
router.post("/contents", putContent);

export default router;