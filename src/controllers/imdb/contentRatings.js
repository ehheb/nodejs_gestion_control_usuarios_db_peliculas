import {ContentRatings, ContentTypes, Contents} from "../../models";

//Obtener todos los ratings con relación al contenido
export const getAllContentRatings = async(req, res) => {
    try {
        let results = await ContentRatings.findAll({include:[ContentTypes]});
        res.status(201).json({
            results
        });

    } catch(error) {
        res.status(500).json({
            message: "Error al obtener el contenido de los ratings"
        });
            
    }
}

//Obtener a un rating y al contenido con relación a los id´s
export const getContentRatingsById = async(req, res) => {
    try {
        let id = req.params.id;
        let results = await ContentRatings.findOne({where: {id: id}, include:[ContentTypes]});
        if(results){
            res.status(201).json({
                results
            });

        } else {
            res.status(401).json({
                message: "id de rating de contenido no encontrado"
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener el rating de contenido"
        });
    }
}

//Añadir un rating con relación al contenido
export const createContentRating = async (req, res) => {
    let contentTypeId = req.body.contentTypeId;
    let name = req.body.name;
    let description = req.body.description;

    try{
        const verifycontentType = await ContentTypes.findOne({where: {id: contentTypeId}});

        if(verifycontentType) {
            const results = await ContentRatings.create({contentTypeId: contentTypeId, name: name, description: description});
            res.status(201).json({
                message: "Se ha creado el rating de contenido de manera éxitosa",
                results
            });

        } else {
            res.status(401).json({
                message: "El id del tipo de contenido no existe"
            });
        }

    } catch(error) {
            res.status(500).json({
                message: "Error al obtener los datos de los ratings de contenido"
            });
    }
}

//Actualizar un rating con relación al contenido
export const updateContentRating = async (req, res) => {
    let id = req.params.id;
    let contentTypeId = req.body.contentTypeId;
    let name = req.body.name;
    let description = req.body.description;

    try {
        const findContentRating = await ContentRatings.findOne({where: {id: id}, include:[ContentTypes]});

        if(findContentRating) {
            const findContentType = await ContentTypes.findOne({where: {id: contentTypeId}});

            if(findContentType) {
                await ContentRatings.update({contentTypeId: contentTypeId, name: name, description: description}, {where: {id: id}});
                console.log(id);
                const showContentRating = await ContentRatings.findOne({where: {id: id}, include:[ContentTypes]});
                return res.status(201).json({
                    message: "El rating de contenido se ha actualizado de manera éxitosa",
                    de: findContentRating,
                    por: showContentRating
                });

            } else {
                return res.status(401).json({
                    message: "El id de tipo de contenido no existe"
                });
            }
        } else {
            return res.status(401).json({
                message: "Id de rating de contenido no encontrado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar los datos del rating de contenido"
        });
    }
}

//Eliminar un rating con relación al contenido
export const deleteContentRating = async (req, res) => {
    let id = req.params.id;

    try {
        const knowContentRating = await ContentRatings.findOne({where: {id: id}});
        if(knowContentRating) {
            let knowContent = await Contents.findOne({where: {contentRatingId: id}});

            if(!knowContent) {
                    await ContentRatings.destroy({where: {id: id}});
                    return res.status(201).json({
                        message: "Se eliminó de manera exitosa el registro del rating de contenido",
                        knowContentRating
                    });
                
            } else {
                return res.status(401).json({
                    message: "No se puede eliminar este rating ya que se encuentra relacionado con algún contenido"
                });
            }
        } else {
            return res.status(401).json({
                message: "No existe el id del rating de contenido"
            });
        } 
    } catch(error) {
        return res.status(500).json({
            message: "Error al borrar el rating de contenido"
        });
    }
}