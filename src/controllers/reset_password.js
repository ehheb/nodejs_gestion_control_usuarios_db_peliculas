import {v4 as uuid} from "uuid";
import {ResetTokens} from "../models/";


export const resetPassword = async(req, res) => {
    try {
        uuid();

    } catch(error) {
        console.log(error);
    }
};

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
