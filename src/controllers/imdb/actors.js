import {Actors} from "../../models";

export const getAllActors = async(req, res) => {
    try {
        let results = await Actors.findAll();
        res.status(200).json({
            results
        });
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener a los actores"
        });
    }
}

export const getActorById = async(req, res) => {
    try {
        let id = req.params.id;
        let results = await Actors.findOne({ where: {id: id}});
        res.status(201).json({
            results
        });

    } catch(error) {
        res.status(500).json({
            message: "Error al obtener actor"
        });
    }
} 