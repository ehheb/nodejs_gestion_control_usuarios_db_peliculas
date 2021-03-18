import express from "express";
import {getAllLanguages, getLanguageById, postLanguage, updateLanguage, deleteLanguage} from "../../controllers/imdb/languages";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";
import {getRole, isAdmin, isEditor, isUser} from "../../middlewares/roleAuth";

const router = express.Router();

//Rutas de los idiomas
router.get("/languages", getRole, isUser, getAllLanguages);
router.get("/languages/:id", getRole, isUser, validateFindInUrl(findInUrl), getLanguageById);
router.post("/languages", getRole, isEditor, validateName(createNameSchema), postLanguage);
router.put("/languages/:id", getRole, isEditor, validateFindInUrl(findInUrl), validateName(createNameSchema), updateLanguage);
router.delete("/languages/:id", getRole, isAdmin, validateFindInUrl(findInUrl), deleteLanguage);

export default router;