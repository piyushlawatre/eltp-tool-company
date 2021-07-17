import { body, query, param } from "express-validator"
import { validate } from "../middlewares/validation"

export const CreateValidator = [
    body("name").isString().isLength({ min: 3 }),
    body("toolImage").isString().isLength({ min: 3 }),
    body("toolOwner").isString().isLength({ min: 3 }),
    body("quantity").isNumeric(),
    body("reOrderLevel").isNumeric().optional(),
    body("availableQuantity").isNumeric().optional(),
    /* -------------------------------- refrences ------------------------------- */
    body("operation").isString().isLength({ min: 24, max: 24 }),
    body("bucket").isString().isLength({ min: 24, max: 24 }),
    body("manufacturer").isString().isLength({ min: 24, max: 24 }),
    body("rack").isString().isLength({ min: 24, max: 24 }),
    body("shelf").isString().isLength({ min: 24, max: 24 }),
    body("subToolType").isString().isLength({ min: 24, max: 24 }),
    body("toolType").isString().isLength({ min: 24, max: 24 }),
    body("isDeleted").isBoolean().optional(),
    validate
]

export const GetByNameValidator = [
    param("name").isString().isLength({ min: 3 }),
    validate
]

export const UpdateValidator = [
    body("_id").isString().isLength({ min: 24, max: 24 }),
    body("name").isString().isLength({ min: 3 }).optional(),
    body("toolImage").isString().isLength({ min: 3 }).optional(),
    body("toolOwner").isString().isLength({ min: 3 }).optional(),
    body("reOrderLevel").isNumeric().optional(),
    body("availableQuantity").isNumeric().optional(),
    /* -------------------------------- refrences ------------------------------- */
    body("operation").isString().isLength({ min: 24, max: 24 }).optional(),
    body("bucket").isString().isLength({ min: 24, max: 24 }).optional(),
    body("manufacturer").isString().isLength({ min: 24, max: 24 }).optional(),
    body("rack").isString().isLength({ min: 24, max: 24 }).optional(),
    body("shelf").isString().isLength({ min: 24, max: 24 }).optional(),
    body("subToolType").isString().isLength({ min: 24, max: 24 }).optional(),
    body("toolType").isString().isLength({ min: 24, max: 24 }).optional(),
    body("isDeleted").isBoolean().optional(),
    validate
]

export const DeleteValidatior = [
    query("id").isString().isLength({ min: 24, max: 24 }),
    validate
]