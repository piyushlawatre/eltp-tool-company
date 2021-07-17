import { NextFunction, Request, Response, Router } from "express";
import { Authorization } from "../middlewares/authorization";
import { ResponseHandler } from "../utility/response-handler";
import TooltypeService from "./tooltype.service";
import { ITooltype } from "./tooltype.types";
import { CreateValidator, DeleteValidatior, GetByNameValidator, UpdateValidator } from "./tooltype.validation";

const router = Router()

/* ------------------------------ CREATE Tool Type -------------------------- */
// http://localhost:4000/tooltype

router.post("/", Authorization, CreateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tool = req.body as ITooltype;
            const result = await TooltypeService.createToolType(tool)
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    })

/* ----------------------------- READ Tool Type ----------------------------- */
// http://localhost:4000/tooltype

router.get("/", Authorization,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await TooltypeService.getToolType();
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    }
)

/* ----------------------------- READ ToolType BY NAME ----------------------------- */
// http://localhost:4000/tooltype/getbyname/Windows-10

router.get("/getbyname/:name", Authorization, GetByNameValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.params;
            const result = await TooltypeService.getToolTypeByName(name);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    }
)

/* ---------------------------- UPDATE Tool Type ---------------------------- */
// http://localhost:4000/tooltype/update

router.put("/update", Authorization, UpdateValidator,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const tool = req.body as ITooltype;
            const result = await TooltypeService.updateToolType(tool);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    });

/* ------------------------------ DELETE Tool Type --------------------------- */
// http://localhost:4000/tooltype/deletebyid?id=60ef052ba8f9bd0420c67197

router.delete("/deletebyid", Authorization, DeleteValidatior,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const toolID = req.query.id;
            const result = await TooltypeService.deleteToolType(toolID as string);
            res.send(new ResponseHandler(result, null));
        } catch (e) {
            next(e);
        }
    }
)

export default router;