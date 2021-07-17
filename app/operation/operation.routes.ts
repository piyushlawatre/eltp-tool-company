import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../utility/response-handler";
import { IOperation } from "./operation.types"
import OperationService from "./operation.service";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./operation.validation";
import { Authorization } from "../middlewares/authorization";

const router = Router()

/* ------------------------------ CREATE OPERATION ------------------------------ */
// http://localhost:4000/operation

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operation = req.body as IOperation;
            const result = await OperationService.createOperation(operation)
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ ALL OPERATION ----------------------------- */
// http://localhost:4000/operation

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await OperationService.getOperation();
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- READ OPERATION BY NAME -------------------------- */
// http://localhost:4000/operation/getbyname/hardware-os

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await OperationService.getOperationByName(name);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

/* --------------------------- UPDATE OPERATION --------------------------------- */
// http://localhost:4000/operation/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operation = req.body as IOperation;
            const result = await OperationService.updateOperation(operation);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE OPERATION ------------------------------ */
// http://localhost:4000/operation/deletebyid?id=60ef28ea3d11aa12cc84a417

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const operationID = req.query.id;
            const result = await OperationService.deleteOperation(operationID as string);
            res.send(new ResponseHandler(result));
        } catch (e) {
            next(e);
        }
    }
)

export default router;