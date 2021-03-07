import express from "express";
import {getAllContentTypes, getContentTypeById, postContentType, updateContentType, deleteContentType} from "../../controllers/imdb/contentTypes";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();
//Rutas de los tipos de contenido
router.get("/content-types", getAllContentTypes);
router.get("/content-types/:id", validateFindInUrl(findInUrl), getContentTypeById);
router.post("/content-types", validateName(createNameSchema), postContentType);
router.put("/content-types/:id", validateFindInUrl(findInUrl), validateName(createNameSchema), updateContentType);
router.delete("/content-types/:id", validateFindInUrl(findInUrl), deleteContentType);

export default router;