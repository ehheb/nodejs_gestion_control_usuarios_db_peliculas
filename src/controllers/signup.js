import {Users, UserRoles, Roles} from "../models/";

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
            const role = 'usuario';
            req.body.password = encryptedPass;
            
            //Se busca un registro que se llame usuario dentro de la tabla de roles
            const searchRole = await Roles.findOne({where: {name: role}});
            
            if(searchRole) {
                const results = await Users.create(req.body);
                const id = results.id;
                const defaultRole = searchRole.id;

                //La persona que crea una nueva cuenta se le coloca por default el rol de "usuario" 
                const userRole = await UserRoles.create({userId: id, roleId: defaultRole});
            
                return res.status(201).json({
                    message: "Se ha creado el nuevo registro con el rol de usuario",
                    results,
                    userRole
                });
            
            } else {
                return res.status(500).json({
                    message: "Dentro de la tabla Roles no se pudo encontrar el rol llamado usuario"
                });
            }


        } else {
            return res.status(400).json({
                message: "No se pudo registrar al usuario"
            });
        }
            
    } catch(error) {
        return res.status(500).json({
            message: "Hubo un problema al registrar al usuario",
            error
        });
    }
}
