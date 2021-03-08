import {Languages} from "../../models";

//Función para obtener todos los idiomas
export const getAllLanguages = async(req, res) => {
    try {
        let results = await Languages.findAll();

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontró la tabla de idiomas"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener los idiomas"
        });
    }
}

//Función para obtener un idioma por medio de su id colocándolo en la URL
export const getLanguageById = async(req, res) => {
    let id = req.params.id;

    try {
        let results = await Languages.findOne({ where: {id: id}});

        if(results) {
            return res.status(201).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontro ningún idioma con el id proporcionado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener el idioma",
            error
        });
    }
}

//Función para crear un nuevo idioma en la base de datos
export const postLanguage = async(req, res) => {

    try {
        let name = req.body.name;
        let results = await Languages.create({name: name});
        
        if(results){
            return res.status(201).json({
                message: "Se ha añadido un nuevo idioma de manera éxitosa",
                results
            });

        } else {
            return res.status(401).json({
                message: "No se pudo añadir el nuevo idioma"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al crear un nuevo idioma",
            error
        });
    }
}

//Función para actualizar los datos de un idioma por medio de su id, colocándolo en la URL
export const updateLanguage = async(req, res) => {
    let id = req.params.id;
    let renameLanguage = req.body.name;

    try {
        let findLanguage = await Languages.findOne({where: {id: id}});

        if(findLanguage) {
                await Languages.update({name: renameLanguage}, { where: {id: id}});
                console.log(findLanguage.id);

                return res.status(201).json({
                    message: "Se ha actualizado el idioma",
                    de: findLanguage.name,
                    por: renameLanguage
                });

        } else {
            return res.status(401).json({
                message: "El id del idioma no se encontró"
            });
        } 

    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar el idioma",
            error
        });
    }
}

//Función para eliminar un idioma por medio del id colocándolo en la URL
export const deleteLanguage = async(req, res) => {
    let id = req.params.id;

    try {
        let knowLanguage = await Languages.findOne({where: {id: id}});

        if(knowLanguage) {
            await Languages.destroy({where: {id: id}});
            let language = knowLanguage.name
            return res.status(201).json({
                message: "Se ha eliminado el idioma de manera correcta",
                Deleted: language
            });

        } else {
            return res.status(400).json({
                message: "No existe el id del idioma"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar el idioma"
        });
    }
}

