import {Users} from "../models/";

import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const emailLowerCase = email.toLowerCase();
        req.body.email = emailLowerCase;

        const validateEmail = await Users.findOne({where:{email : emailLowerCase}});
        
        if(!validateEmail) {
            const encryptedPass = bcrypt.hashSync(password, 10);
            req.body.password = encryptedPass;
            const results = await Users.create(req.body);
            return res.status(201).json({
                message: "Se ha creado el usuario",
                results
            });

        } else {
            return res.status(400).json({
                message: "No se pudo registrar al usuario"
            })
        }
            
    } catch(error) {
        return res.status(500).json({
            message: "Hubo un problema al registrar al usuario",
            error
        });
    }
}
