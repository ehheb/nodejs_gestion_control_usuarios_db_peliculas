import jwt from "jsonwebtoken";

export const generateJWT = (user) => {
    const userToken = {
        id: user.id
    }
    const token = jwt.sign(userToken, process.env.SECRET_KEY, {algorithm: "HS384", expiresIn: "1h"});
    return token;

}