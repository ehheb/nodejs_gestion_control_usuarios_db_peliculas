import {ContentGenres, Genres, Contents} from "../../models";

//Encontrar todos los géneros con relación al contenido
export const findAll = async(req, res) => {
    try {
        let results = await ContentGenres.findAll({include:[Genres, Contents]});
        res.status(200).json({
            message: "Se obtuvieron todos los registros",
            results
        });

    } catch(error) {
        res.status(500).json({
            message: "Error al obtener los datos",
            error
        });
    }
}

//Encontrar un género y un contenido con relación a sus id´s
export const findContentGenre = async(req, res) => {
    let genreId = req.params.genreId;
    let contentId = req.params.contentId;

    try {
        let findGenre = await Genres.findOne({where: {id: genreId}});

        if(findGenre) {
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let findContentGenre = await ContentGenres.findOne({where: {genreId: genreId, contentId: contentId}, include:[Genres, Contents]});
                
                if(findContentGenre) {
                    let genreName = findContentGenre.Genre.name;
                    let contentName = findContentGenre.Content.title;

                    return res.status(201).json({
                        message: "Éxito al obtener los datos entre el género y el contenido",
                        genreName,
                        contentName
                    });
                    
                } else {
                    return res.status(401).json({
                        message: "No existe una relación entre el género y el contenido con esos id´s"
                    });
                }
            } else {
                return res.status(401).json({
                    message: "No se encontró a un contenido con es id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontró a un género con ese id"
            });
        }
        
    } catch(error) {
            return res.status(500).json({
                message: "Error al obtener los datos del género y contenido",
                error
            });
    }
}

//Añadir un género a un contenido
export const addContentGenre = async (req, res) => {
    let genreId = req.body.genreId;
    let contentId = req.body.contentId;

    try {
        let findGenre = await Genres.findOne({where: {id: genreId}});
        
        if(findGenre) {
            let genreName = findGenre.name;
            let findContent = await Contents.findOne({where: {id: contentId}});
            
            if(findContent) {
                let contentName = findContent.title;

                let findContentGenre = await ContentGenres.findOne({where: {genreId: genreId, contentId: contentId}});
                
                if(!findContentGenre) {
                    let createRelation = await ContentGenres.create({genreId: genreId, contentId: contentId});

                    if(createRelation) {
                        return res.status(201).json({
                            message: "Se ha creado la relacion entre el género y el contenido",
                            genreName,
                            contentName
                        });
    
                    } else {
                        return res.status(401).json({
                            message: "Error al crear la relación entre el género y el contenido"
                        });
                    }

                } else {
                    return res.status(401).json({
                        message: "Ya existe esta relación del género y el contenido",
                        genreName,
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
                message: "No se encontró a un género con ese id"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Error al procesar los datos entre el género y el contenido"
        });
    }
}

//Actualizar un género con relación al contenido
export const updateContentGenre = async(req, res) => {
    let genreId = req.params.genreId;
    let contentId = req.params.contentId;
    let newGenreId = req.body.newGenreId;
    let newContentId = req.body.newContentId;

    try {
        let findGenre = await Genres.findOne({where: {id: genreId}});

        if(findGenre) {
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let findContentGenre = await ContentGenres.findOne({where: {genreId: genreId, contentId: contentId}});

                if(findContentGenre) {
                    let verifyGenreBody = await Genres.findOne({where: {id: newGenreId}});

                    if(verifyGenreBody) {
                        let verifyContentBody = await Contents.findOne({where: {id: newContentId}});

                        if(verifyContentBody) {

                            let updateContentGenre = await ContentGenres.update(
                                {genreId: newGenreId, contentId: newContentId}, 
                                {where: {genreId: genreId, contentId: contentId}}
                                );
        
                            if(updateContentGenre) {
                                let findNewCG = await ContentGenres.findOne({where: {genreId: newGenreId, contentId: newContentId}});
                                return res.status(201).json({
                                    message: "Se actualizó el registro del género con relación al contenido",
                                    de: findContentGenre,
                                    por: findNewCG
                                });
        
                            } else {
                                return res.status(401).json({
                                    message: "Error al actualizar el contenido con relación al género, verifique que los id´s sean válidos"
                                });
                            }

                        } else {
                            return res.status(401).json({
                                message: "Verifique que el id del contenido a actualizar sea válido"
                            });
                        }
                    } else {
                        return res.status(401).json({
                            message: "Verifique que el id del género a actualizar sea válido"
                        });
                    }

                } else {
                    return res.status(401).json({
                        message: "No se encontró una relación entre el género y el contenido"
                    });
                }

            } else {
                return res.status(401).json({
                    message: "No se encontró un contenido con ese id"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontró un género con ese id"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar el contenido con respecto al género"
        });
    }
}

//Eliminar un género con relación al contenido
export const deleteContentGenre = async(req, res) => {
    let genreId = req.body.genreId;
    let contentId = req.body.contentId;

    try {

        let findGenre = await Genres.findOne({where: {id: genreId}});

        if(findGenre) {
            let genreName = findGenre.name;
            let findContent = await Contents.findOne({where: {id: contentId}});

            if(findContent) {
                let contentName = findContent.title;
                let findContentGenre = await ContentGenres.findOne({where: {genreId: genreId, contentId: contentId}});

                if(findContentGenre) {
                    let delenteContentGenre = await ContentGenres.destroy({where: {genreId: genreId, contentId: contentId}});
                    return res.status(201).json({
                        message: "Se ha eliminado el siguiente registro de manera correcta",
                        genreName,
                        contentName
                    });
                } else {
                    return res.status(401).json({
                        message: "No existe una relación entre el contenido y el género, verifique los id´s"
                    });
                }

            } else {
                return res.status(401).json({
                    message: "No existe un contenido con ese id"
                });
            }
        } else {
            return res.status(401).json({
                message: "No existe un género con ese id"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar los datos",
            error
        });
    }
}