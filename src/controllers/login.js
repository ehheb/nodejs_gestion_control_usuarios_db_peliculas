
import {Users} from "../models/";
import {generateJWT} from "../middlewares/jwt";
import {getRole} from "../middlewares/roleAuth";
import bcrypt from "bcrypt";

//Función para iniciar sesión
export const login = async(req, res) => {
    
    try {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;

        const results = await Users.findOne({where: {email: email}, include:["Roles"]});
        //Si existe un email en la base de datos entonces ejecuta el siguiente código
        if(results) {
            const comparePass = bcrypt.compareSync(password, results.password);
            const token = generateJWT(results);
            //Si la contraseña es válida corre el siguiente código
            if(comparePass) {                
                return res.status(200).json({
                    message: "Credenciales correctas",
                    results,
                    token
                });
                

            } else {
                return res.status(401).json({
                    message: "Credenciales incorrectas"
                });
            }

        } else {
            return res.status(401).json({
                message: "Credenciales incorrectas"
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Hubo un problema con al iniciar sesión",
            error
        });
    }
}
