import joi from "joi";

export const signupSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required()
});

export const validateSignup = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const validateLogin = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const resetPassSchema = joi.object({
    email: joi.string().email().required()
});

export const validateResetPass = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const updatePassSchema = joi.object({
    token: joi.string().uuid().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required()
});

export const validateUpdatePass = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch(error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

export const roleSchema = joi.object({
    name : joi.string().pattern(new RegExp('^[a-zA-Z]+$')).required()
});

export const validateRole = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.body);
            next();

        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export const userRoleSchema = joi.object({
    userId : joi.string().pattern(/^[0-9]+$/, 'numbers').required(),
    roleId : joi.string().pattern(/^[0-9]+$/, 'numbers').required()
});

export const validateUserRole = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.params);
            next();

        } catch(error) {
            res.status(400).json({
                message: error.message
            });
        }
    } 
}

export const findUsersSchema = joi.object({
    id: joi.string().pattern(/^[0-9]+$/, 'numbers').required()
});

export const validateFindUser = (schema) => {
    return async(req, res, next) => {

        try {
            const value = await schema.validateAsync(req.params);
            next();
            
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}
