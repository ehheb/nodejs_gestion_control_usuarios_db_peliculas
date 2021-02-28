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
            res.status(400).json({
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
            res.status(400).json({
                message: error.message
            })

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
            res.status(400).json({
                message: error.message
            })
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
            res.status(400).json({
                message: error.message
            })
        }
    }
}
