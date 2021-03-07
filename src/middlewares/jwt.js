import jwt from "jsonwebtoken";

//Método para generar el token
export const generateJWT = (req) => {
    
    try {
        const userToken = {
        id: req.id,
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        }
        const token = jwt.sign(userToken, process.env.SECRET_KEY, {algorithm: "HS256", expiresIn: "1h"});
        return token;
    } catch(error) {
        throw new Error("Error al firmar el token");
    } 
    
}