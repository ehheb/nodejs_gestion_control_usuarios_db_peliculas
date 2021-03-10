import express from "express";
import {getAllContents, getContentById, createContent} from "../../controllers/imdb/contents";
import {validateFindInUrl, findInUrl, validateContent, createContentSchema} from "../../middlewares/validators";

const router = express.Router();


router.get("/contents", getAllContents);
router.get("/contents/:id", validateFindInUrl(findInUrl), getContentById);
router.post("/contents", validateContent(createContentSchema), createContent);

export default router;