import express from "express";
import {getAllLanguages, getLanguageById, postLanguage, updateLanguage, deleteLanguage} from "../../controllers/imdb/languages";
import {validateName, createNameSchema, validateFindInUrl, findInUrl} from "../../middlewares/validators";

const router = express.Router();
//Rutas de los idiomas
router.get("/languages", getAllLanguages);
router.get("/languages/:id", validateFindInUrl(findInUrl), getLanguageById);
router.post("/languages", validateName(createNameSchema), postLanguage);
router.put("/languages/:id", validateFindInUrl(findInUrl), validateName(createNameSchema), updateLanguage);
router.delete("/languages/:id", validateFindInUrl(findInUrl), deleteLanguage);

export default router;