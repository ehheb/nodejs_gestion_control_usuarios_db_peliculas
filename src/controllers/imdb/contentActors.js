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
                
                if(findContentActor) {
                    let actorName = findContentActor.Actor.name;
                    let contentName = findContentActor.Content.title;

                    return res.status(201).json({
                        message: "Éxito al traer los datos",
                        actorName,
                        contentName
                    });
                    
                } else {
                    return res.status(401).json({
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
    let actorId = req.body.actorId;
    let contentId = req.body.contentId;

    try {
        let findActor = await Actors.findOne({where: {id: actorId}});
        
        if(findActor) {
            let actorName = findActor.name;
            let findContent = await Contents.findOne({where: {id: contentId}});
            
            if(findContent) {
                let contentName = findContent.title;
                let findContentActor = await ContentActors.findOne({where: {actorId: actorId, contentId: contentId}});

                if(!findContentActor) {
                    let createRelation = await ContentActors.create({actorId: actorId, contentId: contentId});

                    if(createRelation) {
                        return res.status(201).json({
                            message: "Se ha creado la relacion entre el actor y el contenido",
                            actorName,
                            contentName
                        });
    
                    } else {
                        return res.status(401).json({
                            message: "Error al crear la relación entre el actor y el contenido"
                        });
                    }

                } else {
                    return res.status(401).json({
                        message: "Ya existe esta relación del actor y el contenido",
                        actorName,
                        contentName
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
        res.status(500).json({
            message: "Error al procesar los datos"
        });
    }
}

export const updateContentActor = async(req, res) => {
    let actorId = req.params.actorId;
    let contentId = req.params.contentId;
    let newActorId = req.body.newActorId;
    let newContentId = req.body.newContentId;

    try {
        let findActor = await Actors.findOne({where: {id: actorId}});

        if(findActor) {
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let findContentActor = await ContentActors.findOne({where: {actorId: actorId, contentId: contentId}});

                if(findContentActor) {
                    let verifyActorBody = await Actors.findOne({where: {id: newActorId}});

                    if(verifyActorBody) {
                        let verifyContentBody = await Contents.findOne({where: {id: newContentId}});

                        if(verifyContentBody) {
                            let updateContentActor = await ContentActors.update(
                                {actorId: newActorId, contentId: newContentId}, 
                                {where: {actorId: actorId, contentId: contentId}}
                                );
        
                            if(updateContentActor) {
                                let findNewCA = await ContentActors.findOne({where: {actorId: newActorId, contentId: newContentId}});
                                return res.status(201).json({
                                    message: "Se actualizó el registro del actor con relación al contenido",
                                    de: findContentActor,
                                    por: findNewCA
                                });
        
                            } else {
                                return res.status(401).json({
                                    message: "Error al actualizar el contenido con relación al actor"
                                });
                            }

                        } else {
                            return res.status(401).json({
                                message: "Verifique que el id del contenido a actualizar sea válido"
                            });
                        }

                    } else {
                        return res.status(401).json({
                            message: "Verifique que el id del actor a actualizar sea válido"
                        });
                    } 

                } else {
                    return res.status(401).json({
                        message: "No se encontró una relación entre el actor y el contenido"
                    });
                }

            } else {
                return res.status(401).json({
                    message: "No se encontró un contenido con ese id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontró un actor con ese id"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar el contenido con respecto al id"
        });
    }
}

export const deleteContentActor = async(req, res) => {
    let actorId = req.body.actorId;
    let contentId = req.body.contentId;

    try {
        const findActor = await Actors.findOne({where: {id: actorId}});

        if(findActor){
            let actorName = findActor.name

            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let contentName = findContent.title;

                let findContentActor = await ContentActors.findOne({where: {actorId: actorId, contentId, contentId}});

                if(findContentActor) {
                    await ContentActors.destroy({where: {actorId: actorId, contentId, contentId}});
                    return res.status(201).json({
                        message: "Se ha eliminado la siguiente relación de manera éxitosa: ",
                        actorName,
                        contentName
                    });

                } else {
                    return res.status(401).json({
                        message: "No existe relación entre el contenido y el actor"
                    });
                }

            } else {
                return res.status(401).json({
                    message: "No existe un contenido con ese id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No existe un actor con ese id"
            });
        }
    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar los datos del actor y del contenido"
        });
    }
}