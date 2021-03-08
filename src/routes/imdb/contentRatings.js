import express from "express";
import {getAllContentRatings, getContentRatingsById, createContentRating, updateContentRating, deleteContentRating} from "../../controllers/imdb/contentRatings";
import {validateContentRating, createContentRatingSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();

router.get("/content-ratings", getAllContentRatings);
router.get("/content-ratings/:id", validateFindInUrl(findInUrl), getContentRatingsById);
router.post("/content-ratings", validateContentRating(createContentRatingSchema), createContentRating);
router.put("/content-ratings/:id", validateFindInUrl(findInUrl), validateContentRating(createContentRatingSchema), updateContentRating);
router.delete("/content-ratings/:id", validateFindInUrl(findInUrl), deleteContentRating);

export default router;