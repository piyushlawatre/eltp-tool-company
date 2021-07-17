import { body, param, query } from "express-validator"
import { validate } from "../middlewares/validation"

const expectUserType = ["issuer", "operator"]

export const CreateValidator = [
    body("name").isString().isLength({ min: 3 }),
    body("role").isString().toLowerCase().isIn(expectUserType).withMessage("Only User Of Type •Issuer/Operator Allowed"),
    body("email").isString().isEmail(),
    body("password").isString().isLength({ min: 6, max: 15 }),
    body("isDeleted").isBoolean().optional(),
    validate
]

export const UpdateValidator = [
    body("_id").isString().isLength({ min: 24, max: 24 }),
    body("name").isString().isLength({ min: 3 }).optional(),
    body("role").isString().toLowerCase().isIn(expectUserType).withMessage("Only User Of Type •Issuer/Operator Allowed").optional(),
    body("email").isString().isEmail().optional(),
    body("password").isString().isLength({ min: 6, max: 15 }).optional(),
    body("isDeleted").isBoolean().optional(),
    validate
]

export const LoginValidation = [
    body("email").isString().isEmail(),
    body("password").isString().isLength({ min: 6, max: 15 }),
    validate
]