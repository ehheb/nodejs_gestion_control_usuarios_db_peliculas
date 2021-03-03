import {Users, Roles} from "../models/";

export const getRole = async(req, res) => {
    try {
        let id = req.body.id;
        const role = await Users.findOne({where: {id: id}, include:[Roles]});
        return res.status(200).json({
        message: "Datos:",
        role
    });
    } catch(error) {
        return res.status(500).json({
            error
        })
    }
}

// export const isAdmin = (role) => {
//     let role = getRole(30)
//     return (req, res, next) => {
//         if(role === "admin") {
//             next();
//         } else {
//             res.json({
//                 message: "Sin permisos"
//             })
//         }
//     }
// }