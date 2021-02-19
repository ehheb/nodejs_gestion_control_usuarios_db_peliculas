import {Users} from "../models/";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try{
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const emailLowerCase = email.toLowerCase();
    // req.body.email = emailLowerCase;
    // const password = req.body.password;

    // const encryptedPass = bcrypt.hashSync(password, 10);
    // req.body.password = encryptedPass;

    const results = await Users.create(req.body);
    res.json(results);
    } catch(error) {
        console.log(error);
    }
}