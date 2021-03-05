import {Actors} from "../../models";

export const getAllActors = async(req, res) => {
    try {
        let results = await Actors.findAll();

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res,status(401).json({
                message: "No se encontró la tabla de actores"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los actores"
        });
    }
}

export const getActorById = async(req, res) => {
    let id = req.params.id;

    try {
        let results = await Actors.findOne({ where: {id: id}});

        if(results) {
            return res.status(201).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontro ningún actor con ese id"
            });
        }

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
        
        if(results){
            return res.status(201).json({
                message: "Se ha añadido a un nuevo actor de manera satisfactoria",
                results
            });

        } else {
            return res.status(401).json({
                message: "No se pudo crear al nuevo actor"
            });
        }

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
            // if(renameActor) {
                await Actors.update({name: renameActor}, { where: {id: id}});
                console.log(findActor.id);

                return res.status(201).json({
                    message: "Se ha actualizado el actor",
                    de: findActor.name,
                    por: renameActor
                });

            // } else {
            //     return res.status(401).json({
            //         message: "Debe de colocar dentro del cuerpo el nuevo nombre del actor"
            //     });
            // }

        } else {
            return res.status(401).json({
                message: "El id del actor no se encontró"
            });
        } 

    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar el actor",
            error
        });
    }
}

export const deleteActor = async(req, res) => {
    let id = req.params.id;

    try {
        let knowActor = await Actors.findOne({where: {id: id}});

        if(knowActor) {
            await Actors.destroy({where: {id: id}});
            let actor = knowActor.name
            res.status(201).json({
                Elimino: actor,
            });

        } else {
            res.status(400).json({
                message: "No existe el id del actor"
            })
        }

    } catch(error) {
        res.status(500).json({
            message: "Error al eliminar al actor"
        });
    }
}