import { body, param } from "express-validator"
import { validate } from "../middlewares/validation"

export const CreateValidator = [
    body("booked_by").isString().isLength({ min: 24, max: 24 }),
    body("booked_on").isDate().optional(),
    body("is_issued").isBoolean().optional(),
    body("items").isArray(),
    body("items.*.tool").isString().isLength({ min: 24, max: 24 }),
    body("items.*.quantity").isNumeric(),
    validate
]

export const GetByUserIDValidator = [
    param("id").isString().isLength({ min: 24, max: 24 }),
    validate
]

export const MarkAsUpdateValidator = [
    param("id").isString().isLength({ min: 24, max: 24 }),
    validate
]