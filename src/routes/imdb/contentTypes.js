import express from "express";
import {getAllContentTypes, getContentTypeById, postContentType, updateContentType, deleteContentType} from "../../controllers/imdb/contentTypes";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();
//Rutas de los tipos de contenido
router.get("/content-types", getRole, isUser, getAllContentTypes);
router.get("/content-types/:id", getRole, isUser, validateFindInUrl(findInUrl), getContentTypeById);
router.post("/content-types", getRole, isEditor, validateName(createNameSchema), postContentType);
router.put("/content-types/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateName(createNameSchema), updateContentType);
router.delete("/content-types/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteContentType);

export default router;