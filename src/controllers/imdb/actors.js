import {Actors, ContentActors} from "../../models";

//Función para obtener a todos los actores
export const getAllActors = async(req, res) => {
    try {
        let results = await Actors.findAll();

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontró la tabla de actores"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los actores"
        });
    }
}

//Función para obtener a un actor por su id, este se debe de colocar en la URL
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

//Función para añadir a un nuevo actor a la base de datos
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

//Función para actualizar los datos de algun actor por medio de su id
export const updateActor = async(req, res) => {
    let id = req.params.id;
    let renameActor = req.body.name;

    try {
        let findActor = await Actors.findOne({where: {id: id}});

        if(findActor) {
                await Actors.update({name: renameActor}, { where: {id: id}});
                console.log(findActor.id);

                return res.status(201).json({
                    message: "Se ha actualizado el actor",
                    de: findActor.name,
                    por: renameActor
                });

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

//Función para eliminar a un actor por medio de su id
export const deleteActor = async(req, res) => {
    let id = req.params.id;

    try {
        let knowActor = await Actors.findOne({where: {id: id}});

        if(knowActor) {
            let knowContent = await ContentActors.findOne({where: {actorId: id}})
            if(knowContent) {
                return res.status(401).json({
                    message: "No se puede eliminar a este actor ya que tiene relación con algún contenido"
                });

            }else {
                await Actors.destroy({where: {id: id}});
                let actor = knowActor.name
                return res.status(201).json({
                    message: "Se ha eliminado el actor de manera correcta",
                    Deleted: actor
                });
            }

        } else {
            return res.status(400).json({
                message: "No existe el id del actor"
            })
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar al actor"
        });
    }
}