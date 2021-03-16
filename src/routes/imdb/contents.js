import express from "express";
import {getAllContents, getContentById, createContent, updateContent, deleteContent} from "../../controllers/imdb/contents";
import {validateFindInUrl, findInUrl, validateContent, createContentSchema} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

router.get("/contents", getRole, isUser, getAllContents);
router.get("/contents/:id", getRole, isUser, validateFindInUrl(findInUrl), getContentById);
router.post("/contents", getRole, isEditor, validateContent(createContentSchema), createContent);
router.put("/contents/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateContent(createContentSchema), updateContent);
router.delete("/contents/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteContent);

export default router;