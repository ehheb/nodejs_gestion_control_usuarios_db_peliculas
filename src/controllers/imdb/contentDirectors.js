import {ContentDirectors, Directors, Contents} from "../../models";

export const findAll = async(req, res) => {
    try {
        let results = await ContentDirectors.findAll({include:[Directors, Contents]});
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

export const findContentDirector = async(req, res) => {
    let directorId = req.params.directorId;
    let contentId = req.params.contentId;

    try {
        let findDirector = await Directors.findOne({where: {id: directorId}});

        if(findDirector) {
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let findContentDirector = await ContentDirectors.findOne({where: {directorId: directorId, contentId: contentId}, include:[Directors, Contents]});
                
                if(findContentDirector) {
                    let directorName = findContentDirector.Director.name;
                    let contentName = findContentDirector.Content.title;

                    return res.status(201).json({
                        message: "Éxito al traer los datos",
                        directorName,
                        contentName
                    });
                    
                } else {
                    return res.status(401).json({
                        message: "No existe una relación entre el director y el contenido con esos id´s"
                    });
                }
            } else {
                return res.status(401).json({
                    message: "No se encontró a un contenido con es id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontró a un director con ese id"
            });
        }
        
    } catch(error) {
            return res.status(500).json({
                message: "Error al obtener los datos",
                error
            });
    }
}

export const addContentDirector = async (req, res) => {
    let directorId = req.body.directorId;
    let contentId = req.body.contentId;

    try {
        let findDirector = await Directors.findOne({where: {id: directorId}});
        
        if(findDirector) {
            let directorName = findDirector.name;
            let findContent = await Contents.findOne({where: {id: contentId}});
            
            if(findContent) {
                let contentName = findContent.title;
                let findContentDirector = await ContentDirectors.findOne({where: {directorId: directorId, contentId: contentId}});

                if(!findContentDirector) {
                    let createRelation = await ContentDirectors.create({directorId: directorId, contentId: contentId});

                    if(createRelation) {
                        return res.status(201).json({
                            message: "Se ha creado la relacion entre el director y el contenido",
                            directorName,
                            contentName
                        });
    
                    } else {
                        return res.status(401).json({
                            message: "Error al crear la relación entre el director y el contenido"
                        });
                    }

                } else {
                    return res.status(401).json({
                        message: "Ya existe esta relación del director y el contenido",
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
                message: "No se encontró a un director con ese id"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Error al procesar los datos"
        });
    }
}
