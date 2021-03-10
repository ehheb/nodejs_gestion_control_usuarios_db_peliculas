import {EpisodeLists, Contents} from "../../models";

export const getAllEpisodeList = async(req, res) => {

    try {
        let results = await EpisodeLists.findAll();

        if(results) {
            return res.status(201).json({
                results
            });

        } else {
            return res.status(400).json({
                message: "Error al obtener la lista de episodios 123"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener la lista de episodios"
        });
    }
}

export const getEpisodeById = async(req, res) => {
    let id = req.params.id;

    try {
        let findEpisode = await EpisodeLists.findOne({where: {id: id}});

        if(findEpisode) {
            return res.status(201).json({
                message: "Episodio encontrado",
                findEpisode
            });

        } else {
            return res.status(401).json({
                message: "No existe el episodio con ese id"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener los datos"
        });
    }
}

export const createEpisode = async (req, res) => {
    let seasonNum = req.body.seasonNum;
    let episodeName = req.body.episodeName;
    let contentId = req.body.contentId;
    let releaseDate = req.body.releaseDate;
    let episodeRating = req.body.episodeRating;
    let episodeNum = req.body.episodeNum;
    let description = req.body.description;
    let episodeImdbLink = req.body.episodeImdbLink;
    let episodeScoreVotes = req.body.episodeScoreVotes;

    try {
        const findContent = await Contents.findOne({where: {id: contentId}});

        if(findContent) {
            const createEpisode = await EpisodeLists.create({
                seasonNum: seasonNum,
                episodeName: episodeName,
                contentId: contentId,
                releaseDate: releaseDate,
                episodeRating: episodeRating,
                episodeNum: episodeNum,
                description: description,
                episodeImdbLink: episodeImdbLink,
                episodeScoreVotes: episodeScoreVotes
            });

            if(createEpisode) {
                res.status(201).json({
                    message: "El contenido se creó de manera exitosa",
                    createEpisode
                });

            } else {
                res.status(401).json({
                    message: "Error al crear un episodio"
                });
            }
        } else {
            res.status(401).json({
                message: "El contenido con ese id no existe, favor de verificarlo"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Hubo un error al crear el episodio"
        });
    }
}

export const updateEpisode = async(req, res) => {
    let id = req.params.id;

    let seasonNum = req.body.seasonNum;
    let episodeName = req.body.episodeName;
    let contentId = req.body.contentId;
    let releaseDate = req.body.releaseDate;
    let episodeRating = req.body.episodeRating;
    let episodeNum = req.body.episodeNum;
    let description = req.body.description;
    let episodeImdbLink = req.body.episodeImdbLink;
    let episodeScoreVotes = req.body.episodeScoreVotes;

    try {
        let findId = await EpisodeLists.findOne({where: {id: id}});
        if(findId) {
            const updateEpisode = await EpisodeLists.update({
                seasonNum: seasonNum,
                episodeName: episodeName,
                contentId: contentId,
                releaseDate: releaseDate,
                episodeRating: episodeRating,
                episodeNum: episodeNum,
                description: description,
                episodeImdbLink: episodeImdbLink,
                episodeScoreVotes: episodeScoreVotes
            }, {where: {id: id}});
            
            if(updateEpisode) {
                const findUpdate = await EpisodeLists.findOne({where: {id: id}, include:[Contents]});
                return res.status(201).json({
                    message: "Se actualizó el episodio",
                    de: findId,
                    a: findUpdate
                });
            } else {
                return res.status(401).json({
                    message: "Error al actualizar los datos del episodio"
                });
            }

        } else {
            return res.status(401).json({
                message: "No se encontro algún episodio con ese id"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al actualizar los datos del episodio"
        });
    }

}

export const deleteEpisode = async(req, res) => {
    let id = req.params.id;
    try {
        let findId = await EpisodeLists.findOne({where: {id: id}});
        if(findId) {
            await EpisodeLists.destroy({where: {id: id}});
            return res.status(201).json({
                message: "Se eliminó el siguiente contenido de manera exitosa:",
                findId
            });
        } else {
            return res.status(401).json({
                message: "No se encontró el episodio con ese id"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar el episodio",
            error
        });
    }
}