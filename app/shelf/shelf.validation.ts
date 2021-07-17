import { body, query, param } from "express-validator"
import { validate } from "../middlewares/validation"

export const CreateValidator = [
    body("name").isString().isLength({ min: 3 }),
    body("isDeleted").isBoolean().optional(),
    validate
]

export const GetByNameValidator = [
    param("name").isString().isLength({ min: 3 }),
    validate
]

export const UpdateValidator = [
    body("_id").isString().isLength({ min: 24, max: 24 }),
    body("name").isString().isLength({ min: 3 }),
    body("isDeleted").isBoolean().optional(),
    validate
]

export const DeleteValidatior = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]