import express from "express";
import {getAllContents, getContentById, createContent, updateContent} from "../../controllers/imdb/contents";
import {validateFindInUrl, findInUrl, validateContent, createContentSchema} from "../../middlewares/validators";

const router = express.Router();

router.get("/contents", getAllContents);
router.get("/contents/:id", validateFindInUrl(findInUrl), getContentById);
router.post("/contents", validateContent(createContentSchema), createContent);
router.put("/contents/:id", validateFindInUrl(findInUrl), validateContent(createContentSchema), updateContent);

export default router;