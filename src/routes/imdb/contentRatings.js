import express from "express";
import {getAllContentRatings, getContentRatingsById, createContentRating, updateContentRating, deleteContentRating} from "../../controllers/imdb/contentRatings";
import {validateContentRating, createContentRatingSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

router.get("/content-ratings", getRole, isUser, getAllContentRatings);
router.get("/content-ratings/:id", getRole, isUser, validateFindInUrl(findInUrl), getContentRatingsById);
router.post("/content-ratings", getRole, isEditor, validateContentRating(createContentRatingSchema), createContentRating);
router.put("/content-ratings/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateContentRating(createContentRatingSchema), updateContentRating);
router.delete("/content-ratings/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteContentRating);

export default router;