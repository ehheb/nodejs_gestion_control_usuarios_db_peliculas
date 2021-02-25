import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
    
    try {
        const userToken = {
        id: user.id
        }
        const token = jwt.sign(userToken, process.env.SECRET_KEY, {algorithm: "HS384", expiresIn: "1h"});
        return token;
    } catch(error) {
        throw new Error("Error al firmar el token");
    } 
    
}