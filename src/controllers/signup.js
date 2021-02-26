import {Users} from "../models/";

import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try{
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const emailLowerCase = email.toLowerCase();
        const regExp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
        req.body.email = emailLowerCase;
        
        const validateEmail = await Users.findOne({where:{email : emailLowerCase}});
        
        if((firstName == "") || (lastName == "") || (email == "") || (password == "")) {
            return res.status(400).json({
                message: "Debe llenar todos los campos",
            });
            
        } if(!regExp.test(password)) {
            return res.status(400).json({
                message: "Constraseña no valida, solamente debe de contener al menos una letra mayúscula, una letra minúscula y un número"
            });

        } if(validateEmail) {
            return res.status(401).json({
                message: "Correo anteriormente registrado"
            });
        } else {
            
            const encryptedPass = bcrypt.hashSync(password, 10);
            req.body.password = encryptedPass;
            const results = await Users.create(req.body);
            return res.status(201).json({
                message: "Se ha creado el usuario",
                results
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Hubo un problema con la conexión del servidor",
            error
        });
    }
}

// export const login = async(req, res) => {
//     try {
//         const email = req.body.email.toLowerCase();
//         const password = req.body.password;

//         const results = await Users.findOne({where: {email: email}});
        
//         if(results) {
//             const comparePass = bcrypt.compareSync(password, results.password);

//             if(comparePass) {
//                 return res.status(200).json({
//                     message: "Credenciales correctas",
//                     results
//                 })
//             } else {
//                 return res.status(401).json({
//                     message: "Credenciales incorrectas"
//                 })
//             }
//         } else {
//             return res.status(401).json({
//                 message: "Credenciales incorrectas"
//             })
//         }
//     } catch (error) {
//         console.log(error);
//     }
// } 


