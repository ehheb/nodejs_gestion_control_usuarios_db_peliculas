import {Directors} from "../../models";

//Función para obtener a todos los directores
export const getAllDirectors = async(req, res) => {
    try {
        let results = await Directors.findAll();

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontró la tabla de directores"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los directores"
        });
    }
}

//Función para obtener a un director por medio de su id colocándolo en la URL
export const getDirectorById = async(req, res) => {
    let id = req.params.id;

    try {
        let results = await Directors.findOne({ where: {id: id}});

        if(results) {
            return res.status(201).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontro ningún director con el id proporcionado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener el director",
            error
        });
    }
}

//Función para crear a un nuevo director en la base de datos
export const postDirector = async(req, res) => {

    try {
        let name = req.body.name;
        let results = await Directors.create({name: name});
        
        if(results){
            return res.status(201).json({
                message: "Se ha añadido a un nuevo director de manera éxitosa",
                results
            });

        } else {
            return res.status(401).json({
                message: "No se pudo añadir al nuevo director"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al crear nuevo director",
            error
        });
    }
}

//Función para actualizar los datos de un director por medio de su id, colocándolo en la URL
export const updateDirector = async(req, res) => {
    let id = req.params.id;
    let renameDirector = req.body.name;

    try {
        let findDirector = await Directors.findOne({where: {id: id}});

        if(findDirector) {
                await Directors.update({name: renameDirector}, { where: {id: id}});
                console.log(findDirector.id);

                return res.status(201).json({
                    message: "Se ha actualizado el director",
                    de: findDirector.name,
                    por: renameDirector
                });

        } else {
            return res.status(401).json({
                message: "El id del director no se encontró"
            });
        } 

    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar el director",
            error
        });
    }
}

//Función para eliminar a un director por medio del id colocándolo en la URL
export const deleteDirector = async(req, res) => {
    let id = req.params.id;

    try {
        let knowDirector = await Directors.findOne({where: {id: id}});

        if(knowDirector) {
            await Directors.destroy({where: {id: id}});
            let director = knowDirector.name
            return res.status(201).json({
                Deleted: director
            });

        } else {
            return res.status(400).json({
                message: "No existe el id del director"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar al director"
        });
    }
}