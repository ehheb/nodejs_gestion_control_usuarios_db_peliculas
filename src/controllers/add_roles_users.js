import {Users, Roles, UserRoles} from "../models";

//Se crean los roles
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

//Asigna los roles a los usuarios
export const userRole = async(req, res) => {
    const userId = req.params.userId;
    const roleId = req.params.roleId;
    try {
        const verifyUser = await Users.findOne({ where: {id: userId}});
        //Verifica que el usuario exista
        if(verifyUser){
            console.log(verifyUser);
            const verifyRole = await Roles.findOne({ where: {id: roleId}});
            
            //Verifica que el rol exista
            if(verifyRole){
                console.log(verifyRole);
                const userEmail = verifyUser.email;
                const userRole = verifyRole.name; 

                const ifUserExist = await UserRoles.findOne({ where: {userId: userId}});
                //Verifica si el usuario existe, si existe actualiza el rol
                if(ifUserExist) {
                    console.log(ifUserExist);
                    const modifyRole = await UserRoles.update({roleId: roleId}, {where: {userId: userId}});
                    res.status(201).json({
                        message: "Se ha actualizado el rol del usuario",
                        userEmail,
                        userRole,
                        modifyRole
                    })

                //Si no existe el usuario le asigna un rol    
                } else {
                    const addRoleToUser = await UserRoles.create({
                        userId,
                        roleId
                    });
                    res.status(201).json({
                        message: "Se asignó un rol al usuario",
                        userEmail,
                        userRole,
                        addRoleToUser
                    });
                }
                
            } else {
                res.status(401).json({
                    message: "Verifique que el id del rol exista"
                });
            }
        } else {
            res.status(401).json({
                message: "Verifique que el id del usuario exista"
            });
        }
    } catch(error) {
        res.status(401).json({
            message: "Verifique que el id del usuario exista aqui"
        });
        error
    }

}