import {ContentTypes} from "../../models";

//Función para obtener a todos los tipos de contenido
export const getAllContentTypes = async(req, res) => {
    try {
        let results = await ContentTypes.findAll();

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontró la tabla de tipos de contenido"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los tipos de contenido"
        });
    }
}

//Función para obtener un tipo de contenido por medio de su id colocándolo en la URL
export const getContentTypeById = async(req, res) => {
    let id = req.params.id;

    try {
        let results = await ContentTypes.findOne({ where: {id: id}});

        if(results) {
            return res.status(201).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontro ningún tipo de contenido con el id proporcionado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener el tipo de contenido",
            error
        });
    }
}

//Función para crear a un nuevo tipo de contenido en la base de datos
export const postContentType = async(req, res) => {

    try {
        let name = req.body.name;
        let results = await ContentTypes.create({name: name});
        
        if(results){
            return res.status(201).json({
                message: "Se ha añadido a un nuevo tipo de contenido de manera éxitosa",
                results
            });

        } else {
            return res.status(401).json({
                message: "No se pudo añadir un nuevo tipo de contenido"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al crear nuevo tipo de contenido",
            error
        });
    }
}

//Función para actualizar los datos de un tipo de contenido por medio de su id, colocándolo en la URL
export const updateContentType = async(req, res) => {
    let id = req.params.id;
    let renameContentType = req.body.name;

    try {
        let findContentType = await ContentTypes.findOne({where: {id: id}});

        if(findContentType) {
                await ContentTypes.update({name: renameContentType}, { where: {id: id}});
                console.log(findContentType.id);

                return res.status(201).json({
                    message: "Se ha actualizado el tipo de contenido",
                    de: findContentType.name,
                    por: renameContentType
                });

        } else {
            return res.status(401).json({
                message: "El id del tipo de contenido no se encontró"
            });
        } 

    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar el tipo de contenido",
            error
        });
    }
}

//Función para eliminar un tipo de contenido por medio del id colocándolo en la URL
export const deleteContentType = async(req, res) => {
    let id = req.params.id;

    try {
        let knowContentType = await ContentTypes.findOne({where: {id: id}});

        if(knowContentType) {
            await ContentTypes.destroy({where: {id: id}});
            let contentType = knowContentType.name
            return res.status(201).json({
                Deleted: contentType,
            });

        } else {
            return res.status(400).json({
                message: "No existe el id del tipo de contenido"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar al tipo de contenido"
        });
    }
}