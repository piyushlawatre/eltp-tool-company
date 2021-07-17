import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import SubtooltypeService from "./subtooltype.service";
import { ISubtooltype } from "./subtooltype.types";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./subtooltype.validation";

const router = Router()

/* ------------------------------ CREATE SUBTOOLTYPE ------------------------------ */
// http://localhost:4000/subtooltype

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const subToolType = req.body as ISubtooltype;
            const result = await SubtooltypeService.createSubToolType(subToolType)
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ ALL SUBTOOLTYPE ----------------------------- */
// http://localhost:4000/subtooltype

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await SubtooltypeService.getSubToolType();
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ SUBTOOLTYPE BY NAME ------------------------ */
// http://localhost:4000/subtooltype/getbyname/Software-Drive

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await SubtooltypeService.getSubToolTypeByName(name);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE SUBTOOLTYPE --------------------------- */
// http://localhost:4000/subtooltype/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const subToolType = req.body as ISubtooltype;
            const result = await SubtooltypeService.updateSubToolType(subToolType);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE SUBTOOLTYPE ------------------------------ */
// localhost:4000/subtooltype/deletebyid?id=60ef06b42d35982c48bdde5f

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const subtooltypeID = req.query.id;
            const result = await SubtooltypeService.deleteSubToolType(subtooltypeID as string);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    }
)

export default router;