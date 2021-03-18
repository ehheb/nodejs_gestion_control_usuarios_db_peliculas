import {Contents, ContentTypes, ContentRatings} from "../../models";

//Obtener todos los contenidos
export const getAllContents = async (req, res) => {
    
    try {
        const results = await Contents.findAll();
        return res.status(201).json({
            message: "Los contenido son: ",
            results
        });

    } catch(error) {
        return res.status(500).json({ 
            message: "Hubo un error al obtener los contenidos",
            error
        });
    }
}

//Obtener un contenido por su id
export const getContentById = async (req, res) => {
    let id = req.params.id;

    try {
        let results = await Contents.findOne({
            where: {id: id}, 
            include:[ContentTypes, ContentRatings]
        });

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "El id del contenido no ha sido encontrado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener los contenidos",
            error
        });
    }
}

//Crear un nuevo contenido
export const createContent = async (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let totalSeasons = req.body.totalSeasons;
    let imdbScore = req.body.imdbScore;
    let releaseDates = req.body.releaseDates;
    let playTime = req.body.playTime;
    let contentRatingId = req.body.contentRatingId;
    let totalEpisodes = req.body.totalEpisodes;
    let contentTypeId = req.body.contentTypeId;
    let imdbLink = req.body.imdbLink;
    let imdbScoreVotes = req.body.imdbScoreVotes;
    let ratingDetails = req.body.ratingDetails;
    let languages = req.body.languages;
    try {
        let contentRating = await ContentRatings.findOne({where: {id: contentRatingId}});

        if(contentRating) {
            let contentType = await ContentTypes.findOne({where: {id: contentTypeId}});

            if(contentType) {
                let newContent = await Contents.create({
                    title: title,
                    description: description,
                    totalSeasons: totalSeasons,
                    imdbScore: imdbScore,
                    releaseDates: releaseDates,
                    playTime: playTime,
                    contentRatingId: contentRatingId,
                    totalEpisodes, totalEpisodes,
                    contentTypeId: contentTypeId,
                    imdbLink: imdbLink,
                    imdbScoreVotes: imdbScoreVotes,
                    ratingDetails: ratingDetails,
                    languages: languages
                });
                
                if(newContent) {
                    return res.status(201).json({
                        message: "Contenido creado de manera éxitosa",
                        newContent
                    });
                } else {
                    return res.status(401).json({
                        message: "Error al crear un nuevo contenido"
                    });
                }
                
            } else {
                return res.status(401).json({
                    message: "El id del tipo de contenido es inválido"
                });
            }

        } else {
            return res.status(401).json({
                message: "El id del rating de contenido es inválido"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al ingresar un nuevo contenido"
        });
    }
}

//Actualizar un contenido por medio de su id y de sus atributos
export const updateContent = async (req, res) => {
    let id = req.params.id;

    let title = req.body.title;
    let description = req.body.description;
    let totalSeasons = req.body.totalSeasons;
    let imdbScore = req.body.imdbScore;
    let releaseDates = req.body.releaseDates;
    let playTime = req.body.playTime;
    let contentRatingId = req.body.contentRatingId;
    let totalEpisodes = req.body.totalEpisodes;
    let contentTypeId = req.body.contentTypeId;
    let imdbLink = req.body.imdbLink;
    let imdbScoreVotes = req.body.imdbScoreVotes;
    let ratingDetails = req.body.ratingDetails;
    let languages = req.body.languages;
    
    try {
        let findContentId = await Contents.findOne({where: {id: id}});

        if(findContentId) {
            let contentRating = await ContentRatings.findOne({where: {id: contentRatingId}});

            if(contentRating) {
                let contentType = await ContentTypes.findOne({where: {id: contentTypeId}});
    
                if(contentType) {
                    await Contents.update({
                        title: title,
                        description: description,
                        totalSeasons: totalSeasons,
                        imdbScore: imdbScore,
                        releaseDates: releaseDates,
                        playTime: playTime,
                        contentRatingId: contentRatingId,
                        totalEpisodes, totalEpisodes,
                        contentTypeId: contentTypeId,
                        imdbLink: imdbLink,
                        imdbScoreVotes: imdbScoreVotes,
                        ratingDetails: ratingDetails,
                        languages: languages
                    }, {where: {id: id}});
                    const newUpdateContent = await Contents.findOne({where: {id: id}})

                        return res.status(201).json({
                            message: "El contenido se actualizó de manera éxitosa",
                            newUpdateContent
                        });

                    
                } else {
                    return res.status(401).json({
                        message: "El id del tipo de contenido es inválido"
                    });
                }
    
            } else {
                return res.status(401).json({
                    message: "El id del rating de contenido es inválido"
                });
            }

        } else {
            return res.status(401).json({
                message: "El id del contenido no se encontró"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar contenido"
        });
    }
}

//Eliminar un contenido por medio de su id
export const deleteContent = async (req, res) => {
    let id = req.params.id;
    try {
        let findContent = await Contents.findOne({where: {id: id}});
        
        if(findContent) {
            await Contents.destroy({where: {id: findContent.id}});
            return res.status(201).json({
                message: "Se eliminó de manera éxitosa el contenido",
                findContent
            });

        } else {
            return res.status(401).json({
                message: "No existe algún contenido con ese id"
            });
        }
    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar el contenido"
        });
    }
}