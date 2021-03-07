import {Users} from "../models/";
import jwt from "jsonwebtoken";

//Middleware para obtenr el JWT y poder así obtener al usuario que inició sesión
export const getRole = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        
        if(token) {
        const userToken = jwt.verify(token, process.env.SECRET_KEY);
            
            if(userToken) {
                req.id = userToken.id;
                next();

            } else {
                return res.status(400).json({
                    message: "Credenciales incorrectas"
                });
            }

        } else {
            return res.status(400).json({
                message: "Token no encontrado"
            });
        }
    
    } catch(error) {
        return res.status(500).json({
            message: "Error al encontrar token"
        })
    }
}

//Middleware para el rol administrador del usuario que inició sesión
export const isAdmin = async(req, res, next) => {
    try {
        const user = await Users.findOne({where: {id: req.id}, include:["Roles"]});
        const userRole = user.Roles[0].name;
        console.log(userRole);
        if(userRole === "administrador") {
            next();
        } else {
            res.status(400).json({
                message: "No tienes permiso para acceder a esta ruta"
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener el recurso",
            error
        })
    }
}

//Middleware para el rol editor del usuario que inició sesión
export const isEditor = async(req, res, next) => {
    try {
        const user = await Users.findOne({where: {id: req.id}, include:["Roles"]});
        const userRole = user.Roles[0].name;
        console.log(userRole);
        if(userRole === "editor") {
            next();
        } else {
            res.status(400).json({
                message: "No tienes permiso para acceder a esta ruta"
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener el recurso",
            error
        })
    }
}

//Middleware para el rol usuario del usuario que inició sesión
export const isUser = async(req, res, next) => {
    try {
        const user = await Users.findOne({where: {id: req.id}, include:["Roles"]});
        const userRole = user.Roles[0].name;
        console.log(userRole);
        if(userRole === "usuario") {
            next();
        } else {
            res.status(400).json({
                message: "No tienes permiso para acceder a esta ruta"
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error al obtener el recurso",
            error
        })
    }
}
