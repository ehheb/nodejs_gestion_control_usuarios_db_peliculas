import {Actors} from "../../models";

export const getAllActors = async(req, res) => {
    try {
        let results = await Actors.findAll();
        return res.status(200).json({
            results
        });
    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los actores"
        });
    }
}

export const getActorById = async(req, res) => {
    try {
        let id = req.params.id;
        let results = await Actors.findOne({ where: {id: id}});
        return res.status(201).json({
            results
        });

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener actor",
            error
        });
    }
}

export const postActor = async(req, res) => {
    try {
        let name = req.body.name;

        let results = await Actors.create({name: name});
        return res.status(201).json({
            message: "Se ha añadido a un nuevo actor de manera satisfactoria",
            results
        })

    } catch(error) {
        return res.status(500).json({
            message: "Error al crear nuevo actor",
            error
        });
    }
}

export const updateActor = async(req, res) => {
    let id = req.params.id;
    let renameActor = req.body.name;
    try {
        let findActor = await Actors.findOne({where: {id: id}});
    if(findActor) {
        if(renameActor) {
            let results = await Actors.update({name: renameActor}, { where: {id: id}});
            console.log(findActor.id);
            return res.status(201).json({
                message: "Se ha actualizado el actor",
                de: findActor.name,
                por: renameActor
            });
        } else {
            return res.status(401).json({
                message: "Debe de colocar dentro del cuerpo el nuevo nombre"
            })
        }
    } else {
        return res.status(401).json({
            message: "El id del actor no se encontró"
        })
    } 
    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar el actor",
            error
        })
    }

}