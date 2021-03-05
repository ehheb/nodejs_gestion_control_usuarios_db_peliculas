import joi from "joi";
import spanishJoi from "../utils/spanish-joi-messages";

//findUserSchema
//validateFindUser
export const findInUrl = joi.object({
    id: joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
});

export const validateFindInUrl = (schema) => {
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

export const createActorSchema = joi.object({
    name: joi.string().required().messages(spanishJoi)
});

export const validateActors = (schema) => {
    return async(req, res, next) => {
        try {
            const value = await schema.validateAsync(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export const signupSchema = joi.object({
    firstName: joi.string().required().messages(spanishJoi),
    lastName: joi.string().required().messages(spanishJoi),
    email: joi.string().email().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages(spanishJoi)
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
    email: joi.string().email().required().messages(spanishJoi),
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
    email: joi.string().email().required().messages(spanishJoi)
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
    token: joi.string().uuid().required().messages(spanishJoi),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required().messages(spanishJoi)
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
    name : joi.string().pattern(new RegExp('^[a-zA-Z]+$')).required().messages(spanishJoi)
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
    userId : joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi),
    roleId : joi.string().pattern(/^[0-9]+$/, 'numbers').required().messages(spanishJoi)
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
