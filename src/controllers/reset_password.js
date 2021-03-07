import {Users, ResetTokens} from "../models/";
import sendEmail from "../utils/nodemailer";
import {v4 as uuid} from "uuid";
import moment from "moment";
import bcrypt from "bcrypt";

//Función para envíar el token al correo electrónico
export const resetPassword = async(req, res) => {
    const email = req.body.email;

    try {
        const user = await Users.findOne({where: {email: email}});

        if(user) {
            const userId = user.id;
            const userEmail = user.email;
            const tokenUUID = uuid();
            const resetToken = {
                userId: userId,
                token: tokenUUID,
                expirationDate: moment().add(1, 'hour'),
                active: true
            }
            const results = await ResetTokens.create(resetToken);
            //Se manda a llamar a la función sendEmail que es la que permite enviar el email
            sendEmail(userEmail, tokenUUID, userId);
            return res.status(201).json({
                message: "Se envió el token de reestablecimiento al correo electrónico proporcionado"
            });

        } else {
            return res.status(400).json({
                message: "Se envió el token de reestablecimiento al correo electrónico proporcionado guiño guiño"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Error al mandar el correo electrónico",
            error
        });
    }
};

//Función para actualizar la contraseña por medio del token enviado al correo electrónico
export const updatePassword = async(req, res) => {
    const token = req.body.token;
    const userParamsId = req.params.userId;

    try {
        const findToken = await ResetTokens.findOne({where : {token: token}});
        
        //Valida que se encuentre el token dentro de la bd y valida si este token se encuentra en activo
        if(findToken && findToken.active) {
            const userId = findToken.userId;
            const expirationToken = findToken.expirationDate;
            const date = new Date();

            if(userId == userParamsId) {

                //Valida si el token sigue vigente
                if(moment(date).isBefore(expirationToken)){
                    //Se realiza el cambio de contraseña dentro de la base de datos
                    const password = req.body.password;
                    const encryptedPass = bcrypt.hashSync(password, 10);
                    req.body.password = encryptedPass;
                    await Users.update({password: encryptedPass},{where: {id: userId}});
    
                    //Se cambia a falso el estado del token
                    findToken.active = false;
                    const active = findToken.active; 
                    //Se realiza el cambio de true a false en la base de datos
                    await ResetTokens.update({active: active},{where : {token: token}});
    
                    //Si todo sale bien, se realiza el restablecimiento de la contraseña
                    return res.status(200).json({
                        message: "La constraseña se restableció de manera éxitosa",
                        password
                    });
    
                //Si ya expiró el token
                } else {
                    //Se cambia a falso el estado del token
                    findToken.active = false;
                    const active = findToken.active; 
                    //Se realiza el cambio de true a false en la base de datos
                    await ResetTokens.update({active: active},{where : {token: token}});
                    //Se realiza un return con el estatus 401
                    return res.status(401).json({
                        message: "El token ha expirado o es invalido, vuelva a solicitar un nuevo token",
                    });
                }
                
            } else {
                return res.status(403).json({
                    message: "Usuario de la url invalido"
                });
            }

        } else {
            return res.status(403).json({
                message: "Token invalido o ya utilizado"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Ocurrió un problema al mandar los datos",
            error
        });
    }
}