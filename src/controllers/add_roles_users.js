import {UserRoles, Roles} from "../models";

export const addRole = async(req, res) => {
    const name = req.body.name;
    const toLowerName = name.toLowerCase();
    req.body.name = toLowerName;
    try {
        const results = await Roles.create(req.body);
        res.status(201).json({
            message: "Se ha creado el rol de manera éxitosa",
            results
        });
    } catch(error) {
        res.status(401).json({
            message: "Error a crear el rol",
            error
        })
    }
}