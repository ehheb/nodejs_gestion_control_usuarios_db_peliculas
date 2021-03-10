import {ContentActors, Actors, Contents} from "../../models";

export const findAll = async(req, res) => {
    try {
        let results = await ContentActors.findAll({include:[Actors, Contents]});
        res.status(200).json({
            message: "Se obtuvieorn todos los registros",
            results
        });
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error
        });
    }
}

export const findContentActor = async(req, res) => {
    let actorId = req.params.actorId;
    let contentId = req.params.contentId;
    try {
        let findActor = await Actors.findOne({where: {id: actorId}});

        if(findActor) {
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let findContentActor = await ContentActors.findOne({where: {actorId: actorId, contentId: contentId}, include:[Actors, Contents]});
                let actorName = findContentActor.Actor.name;
                let contentName = findContentActor.Content.title;
                
                if(findContentActor) {
                    res.status(201).json({
                        message: "Éxito al traer los datos",
                        actorName,
                        contentName
                    });
                    
                } else {
                    res.status(401).json({
                        message: "No existe una relación entre el actor y el contenido con esos id´s"
                    });
                }
            } else {
                return res.status(401).json({
                    message: "No se encontró a un contenido con es id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontró a un actor con ese id"
            });
        }
        
    } catch(error) {
            return res.status(500).json({
                message: "Error al obtener los datos",
                error
            });
    }
}

export const addContentActor = async (req, res) => {
    let actorId = req.params.actorId;
    let contentId = req.params.contentId;
    try {
        let findActor = await Actors.findOne({where: {id: actorId}});

        if(findActor) {
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                const createRelation = await ContentActors.create({actorId: actorId, contentId: contentId});
                if(createRelation) {
                    res.status(201).json({
                        message: "Se ha creado la relacion"
                    });
                } else {

                }

            } else {
                return res.status(401).json({
                    message: "No se encontró a un contenido con es id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontró a un actor con ese id"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Error al procesar los datos"
        });
    }
}