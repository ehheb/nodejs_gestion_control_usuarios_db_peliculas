import {Genres} from "../../models";

//Función para obtener todos los géneros
export const getAllGenres = async(req, res) => {
    try {
        let results = await Genres.findAll();

        if(results) {
            return res.status(200).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontró la tabla de géneros"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los géneros"
        });
    }
}

//Función para obtener un género por medio de su id colocándolo en la URL
export const getGenreById = async(req, res) => {
    let id = req.params.id;

    try {
        let results = await Genres.findOne({ where: {id: id}});

        if(results) {
            return res.status(201).json({
                results
            });

        } else {
            return res.status(401).json({
                message: "No se encontro ningún género con el id proporcionado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener al género",
            error
        });
    }
}

//Función para crear un nuevo género en la base de datos
export const postGenre = async(req, res) => {

    try {
        let name = req.body.name;
        let results = await Genres.create({name: name});
        
        if(results){
            return res.status(201).json({
                message: "Se ha añadido un nuevo género de manera éxitosa",
                results
            });

        } else {
            return res.status(401).json({
                message: "No se pudo añadir al nuevo género"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al crear un nuevo género",
            error
        });
    }
}

//Función para actualizar los datos de un género por medio de su id, colocándolo en la URL
export const updateGenre = async(req, res) => {
    let id = req.params.id;
    let renameGenre = req.body.name;

    try {
        let findGenre = await Genres.findOne({where: {id: id}});

        if(findGenre) {
                await Genres.update({name: renameGenre}, { where: {id: id}});
                console.log(findGenre.id);

                return res.status(201).json({
                    message: "Se ha actualizado el género",
                    de: findGenre.name,
                    por: renameGenre
                });

        } else {
            return res.status(401).json({
                message: "El id del género no se encontró"
            });
        } 

    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar el género",
            error
        });
    }
}

//Función para eliminar un género por medio del id colocándolo en la URL
export const deleteGenre = async(req, res) => {
    let id = req.params.id;

    try {
        let knowGenre = await Genres.findOne({where: {id: id}});

        if(knowGenre) {
            await Genres.destroy({where: {id: id}});
            let genre = knowGenre.name
            return res.status(201).json({
                message: "Se ha eliminado el género de manera correcta",
                Deleted: genre
            });

        } else {
            return res.status(400).json({
                message: "No existe el id del género"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al eliminar el género"
        });
    }
}