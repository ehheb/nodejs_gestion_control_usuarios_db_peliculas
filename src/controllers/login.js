
import {Users} from "../models/";
import {generateJWT} from "../middlewares/jwt";
import bcrypt from "bcrypt";

export const login = async(req, res) => {
    try {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;

        const results = await Users.findOne({where: {email: email}});
        
        if(results) {
            const comparePass = bcrypt.compareSync(password, results.password);
            const token = generateJWT(results);
            
            if(comparePass) {
                res.status(200).json({
                    message: "Credenciales correctas",
                    results,
                    token
                });

            //Se crea un nuevo password dentro de la tabla reset tokens
            // const id = results.id;
            // const expirationDate = new Date();
            // expirationDate.setHours (expirationDate.getHours() + 1);
            // req.body.userId = id;
            // req.body.token = uuid(token);
            // req.body.expirationDate = expirationDate;
            // req.body.active = true;

                
            // const createToken = await ResetTokens.create(req.body);
            // return res.status(200).json({
            //     message: "Token guardado con éxito, credenciales correctas",
            //     createToken
            // })    


            } else {
                return res.status(401).json({
                    message: "Credenciales incorrectas"
                })
            }
        } else {
            return res.status(401).json({
                message: "Credenciales incorrectas"
            })
        }
    } catch (error) {
        console.log(error);
    }
} 
